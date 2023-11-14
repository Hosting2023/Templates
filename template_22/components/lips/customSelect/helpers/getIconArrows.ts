import arrowDown from '@/assets/icons/arrowDown.svg';
import arrowUp from '@/assets/icons/arrowUp.svg';

export const getIconArrows = (open: boolean) =>
  open ? (arrowUp as unknown as string) : (arrowDown as unknown as string);
