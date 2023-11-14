import { DatePickerType } from './DatePickerType';

export interface IDatePickerProps {
  currentDate: Date;
  type?: DatePickerType;
  onDone?: (inputValue: string) => void;
  onClose?: (ref?: HTMLElement) => void;
  language?: string;
}
