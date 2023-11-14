import { textAreaTypesConfig } from './config';
import { IDefaultTextAreaProps } from './Default';
interface ICustomTextAreaProps {
  variant: 'default' | 'autoHeight' | 'hide';
}

const CustomTextArea = ({
  variant,
  ...props
}: ICustomTextAreaProps & IDefaultTextAreaProps) =>
  textAreaTypesConfig(props)[variant];

export default CustomTextArea;
