import type { FC } from 'react';
import React from 'react';
import {
  StyleLabelAlign,
  StyleLabelAlt,
  StyleLabelHeight,
  StyleLabelSize,
  StyleLabelTransform,
  StyleLabelWeight,
} from 'constants/styleLabels';
import { Form } from 'formik';
import Image from 'next/image';

import lock from '@/assets/icons/lock.svg';
import { Button, Text } from '@/components/lips';

import { ButtonLabelResetPassword } from '../constants/ButtonLabelResetPassword';
import { TittleLabelResetPassword } from '../constants/TittleLabelResetPassword';
import { initFormModelResetPassword } from '../form-model/init-values-reset-password';

import { ResetPasswordFields } from './ResetPasswordFields';

import styles from '../styles.module.scss';

interface IMainScreenResetPasswordProps {
  isValid: boolean;
}

export const MainScreenResetPassword: FC<IMainScreenResetPasswordProps> = ({
  isValid,
}) => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      <Image
        src={lock as unknown as string}
        alt={StyleLabelAlt.Lock}
      />
      <Text
        align={StyleLabelAlign.Left}
        weight={StyleLabelWeight.Bold}
        size={StyleLabelSize.Lg}
        transform={StyleLabelTransform.Capitalize}
      >
        {TittleLabelResetPassword.Title}
      </Text>
    </h1>

    <Form className={styles.container}>
      <ResetPasswordFields fields={initFormModelResetPassword} />
      <div className={styles.buttonWrapper}>
        <Button
          type="submit"
          height={StyleLabelHeight.Small}
          disabled={!isValid}
          className={styles.button}
        >
          {ButtonLabelResetPassword.Done}
        </Button>
      </div>
    </Form>
  </div>
);
