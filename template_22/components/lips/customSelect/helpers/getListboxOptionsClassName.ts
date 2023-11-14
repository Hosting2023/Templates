import { getClassNames } from '@/components/lips/customSelect/Default/config';
import { DirectionType } from '@/components/lips/customSelect/Default/interfaces/DirectionType';

export const getListboxOptionsClassName = (direction: DirectionType) =>
  getClassNames({ direction }).listBoxOptionsClassName;
