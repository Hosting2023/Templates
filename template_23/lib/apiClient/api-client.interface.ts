import { HttpMethod } from 'ky/distribution/types/options';

export interface RequestConfigArgs {
  method: HttpMethod;
  data?: any;
  config?: any;
  isJson: boolean;
}
