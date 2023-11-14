import type { FC } from 'react';
import React from 'react';

import { ChipsGroup, DialogWindow } from '@/components/lips';
import ForgotPassword from '@/components/registration/forgotPassword';

interface IForgotPasswordProps {
  isOpen: boolean;
  onClose: VoidFunction;
  onSubmitCode?: VoidFunction;
}

const ForgotPasswordModal: FC<IForgotPasswordProps> = ({ isOpen, onClose }) => (
  <DialogWindow
    isOpen={isOpen}
    onClose={onClose}
    size="large"
  >
    <ChipsGroup>
      <ForgotPassword closeModal={onClose} />
    </ChipsGroup>
  </DialogWindow>
);

export default ForgotPasswordModal;
