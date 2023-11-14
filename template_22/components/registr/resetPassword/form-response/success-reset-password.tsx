import React from 'react';
import { StyleLabelAlt } from 'constants/styleLabels';
import Image from 'next/image';

import key from '@/assets/icons/key.svg';
import { Text } from '@/components/lips';

import { TittleLabelResetPassword } from '../constants/TittleLabelResetPassword';

import styles from '../styles.module.scss';

export const SuccessResetPassword = () => (
  <div className={styles.caption}>
    <Text>{TittleLabelResetPassword.TitleSuccess}</Text>
    <Image
      src={key as unknown as string}
      alt={StyleLabelAlt.Key}
    />
  </div>
);
