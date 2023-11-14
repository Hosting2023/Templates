export const getInputType = (isChecked: boolean): 'password' | 'text' =>
  isChecked ? 'password' : 'text';
