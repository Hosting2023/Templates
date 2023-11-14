import ky from 'ky';

import { RequestConfigArgs } from './api-client.interface';

enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
}

class ApiClient {
  private client: typeof ky = ky.create({
    prefixUrl: process.env.NEXT_PUBLIC_AUTH_HOST,
    headers: {
      Accept: 'application/json',
    },
    credentials: 'include',
    hooks: {
      beforeError: [
        async (error) => {
          const { response } = error;
          if (response && response.body) {
            const body = await response.json();
            if ('errorsMessages' in body) {
              error.message = body.errorsMessages
                .map(
                  (el: { field: string; message: string }) =>
                    `${el.field}: ${el.message}; `,
                )
                .join();
            }
          }

          return error;
        },
      ],
    },
  });

  private async handleErrors<T>(request: Promise<T>): Promise<T> {
    try {
      const response: T = await request;
      return response;
    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error) {
        const responseError = error as any;
        if (
          responseError.response.status === 400 ||
          responseError.response.status === 401
        ) {
          throw new Error(error.message);
        }
        if (responseError.response.status === 404) {
          throw new Error(`Error: ${responseError.options.body}`);
        }
      }
      throw error;
    }
  }

  private getRequestConfig(args: RequestConfigArgs) {
    const { method, data, config, isJson = true, prefixUrl } = args;

    return {
      prefixUrl: prefixUrl || process.env.NEXT_PUBLIC_AUTH_HOST,
      method,
      ...(isJson ? { json: data } : { body: data }),
      ...config,

      headers: {
        ...(isJson ? { 'Content-Type': 'application/json' } : {}),
        Accept: 'application/json',
      },
    };
  }

  async request<T>(
    url: string,
    method: HttpMethod,
    data?: any,
    config?: any,
    prefixUrl?: string,
  ): Promise<T | string | unknown> {
    const requestConfig = this.getRequestConfig({
      method,
      data,
      config,
      isJson: true,
      prefixUrl,
    });
    const request = this.client(url, requestConfig).json();
    return this.handleErrors(request);
  }

  async requestForm<T>(
    url: string,
    method: HttpMethod,
    data?: any,
    config?: any,
  ): Promise<T | string | unknown> {
    const requestConfig = this.getRequestConfig({
      method,
      data,
      config,
      isJson: false,
    });
    const request = this.client(url, requestConfig).json();
    return this.handleErrors(request);
  }

  async get<T>(url: string, config?: any): Promise<T | string | unknown> {
    return this.request<T>(url, HttpMethod.GET, undefined, config);
  }

  async postFormData<T>(
    url: string,
    data: FormData,
    config?: any,
  ): Promise<T | string | unknown> {
    return this.requestForm<T>(url, HttpMethod.POST, data, config);
  }

  async post<T>(
    url: string,
    data: any,
    config?: any,
    prefixUrl?: string,
  ): Promise<T | string | unknown> {
    return this.request<T>(url, HttpMethod.POST, data, config, prefixUrl);
  }

  async patch<T>(url: string, data: any, config?: any) {
    return this.request<T>(url, HttpMethod.PATCH, data, config);
  }

  async put<T>(
    url: string,
    data: any,
    config?: any,
  ): Promise<T | string | unknown> {
    return this.request<T>(url, HttpMethod.PUT, data, config);
  }

  async delete<T>(url: string, config?: any): Promise<T | string | unknown> {
    return this.request<T>(url, HttpMethod.DELETE, undefined, config);
  }
}

export const apiClient = new ApiClient();
