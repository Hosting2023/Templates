import { SelectConfigProps, selectTypesConfig } from './config';

interface ICustomSelectProps {
  variant: 'default' | 'withInput';
}

const CustomSelect = ({
  variant,
  ...props
}: ICustomSelectProps & SelectConfigProps) => selectTypesConfig(props)[variant];

export default CustomSelect;
