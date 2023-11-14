import React from 'react';

import AutoHeightTextArea from './AutoHeight';
import Default, { IDefaultTextAreaProps } from './Default';
import HideTextArea from './Hide';

export const textAreaTypesConfig = (props: IDefaultTextAreaProps) => ({
  default: <Default {...props} />,
  autoHeight: <AutoHeightTextArea {...props} />,
  hide: <HideTextArea {...props} />,
});
