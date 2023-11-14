import { getClassNames } from '@/components/lips/customSelect/Default/config';
import { ISelectItem } from '@/components/lips/customSelect/Default/interfaces/ISelectItem';
import { isLastElementId } from '@/components/lips/customSelect/helpers/isLastElement';

export const getListBoxClassName = (options: ISelectItem[], id: number) =>
  getClassNames({ lastId: isLastElementId(options, id) }).listBoxClassName;
