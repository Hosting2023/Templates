interface IGetInitialText {
  defaultValue?: string | number | readonly string[];
  maskPlaceholder?: string | null;
}

export const getInitialText = ({
  defaultValue,
  maskPlaceholder,
}: IGetInitialText) =>
  defaultValue ?? maskPlaceholder !== '1' ? maskPlaceholder : undefined;
