import { getClassNames } from '@/components/lips/customSelect/Default/config';
import { ISelectItem } from '@/components/lips/customSelect/Default/interfaces/ISelectItem';

interface ITextClassName {
  option: ISelectItem;
  selected?: ISelectItem;
}

export const getTextClassName = ({ option, selected }: ITextClassName) =>
  getClassNames({ select: selected === option }).textClassName;
