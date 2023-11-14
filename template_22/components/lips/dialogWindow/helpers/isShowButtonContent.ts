import { ButtonContentType } from '../interfaces/ButtonContentType';

export const isShowButtonContent = (buttonContent: ButtonContentType) =>
  Object.values(buttonContent).find((el) => el !== undefined);
