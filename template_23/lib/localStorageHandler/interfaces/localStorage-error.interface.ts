import type { LocalStorageErrorMessage } from '../const/localStorage-errors';

export interface LocalStorageError {
  message: LocalStorageErrorMessage;
  error: Error | unknown;
}
