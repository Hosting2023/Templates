import { InputConfigProps, inputTypesConfig } from './config';

interface ICustomInputProps {
  variant: 'default' | 'password' | 'mask';
}

const CustomInput = ({
  variant,
  ...props
}: ICustomInputProps & InputConfigProps) => inputTypesConfig(props)[variant];

export default CustomInput;
