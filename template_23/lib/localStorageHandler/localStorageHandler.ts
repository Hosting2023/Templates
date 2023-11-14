import { LocalStorageErrorMessage } from './const/localStorage-errors';
import type { LocalStorageError } from './interfaces/localStorage-error.interface';

export class LocalStorageHandler {
  private storage?: Storage = window?.localStorage;

  private static handleError(
    error: unknown,
    message: LocalStorageErrorMessage,
  ): LocalStorageError {
    if (error instanceof Error) {
      return { message, error: error.message };
    }
    return { message, error };
  }

  public setItem<T>(key: string, value: T): LocalStorageError | undefined {
    try {
      this.storage?.setItem(key, JSON.stringify(value));
      return undefined;
    } catch (error: unknown) {
      return LocalStorageHandler.handleError(
        error,
        LocalStorageErrorMessage.SetItem,
      );
    }
  }

  public getItem<T>(key: string): T | LocalStorageError {
    try {
      if (this.storage !== null) {
        const value = JSON.parse(this.storage?.getItem(key) as string) as T;
        return value;
      }
      throw new Error(LocalStorageErrorMessage.GetItem);
    } catch (error: unknown) {
      return LocalStorageHandler.handleError(
        error,
        LocalStorageErrorMessage.GetItem,
      );
    }
  }

  public removeItem(key: string): LocalStorageError | undefined {
    try {
      this.storage?.removeItem(key);
      return undefined;
    } catch (error: unknown) {
      return LocalStorageHandler.handleError(
        error,
        LocalStorageErrorMessage.RemoveItem,
      );
    }
  }

  public clear(): LocalStorageError | undefined {
    try {
      this.storage?.clear();
      return undefined;
    } catch (error: unknown) {
      return LocalStorageHandler.handleError(
        error,
        LocalStorageErrorMessage.Clear,
      );
    }
  }
}
