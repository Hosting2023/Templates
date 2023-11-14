import { ISelectItem } from '@/components/lips/customSelect/Default/interfaces/ISelectItem';

export const isLastElementId = (options: ISelectItem[], id: number) =>
  id === options.slice().pop()?.id;
