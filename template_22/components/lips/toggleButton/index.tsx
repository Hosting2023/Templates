import type { FC } from 'react';
import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface IToggleButtonProps {
  option: boolean;
  onChange: (option: boolean) => void;
}

const ToggleButton: FC<IToggleButtonProps> = ({
  option,
  onChange = () => {
    console.log('here');
  },
}) => {
  const [enabled, setEnabled] = useState(option);

  const handleChange = (value: boolean) => {
    setEnabled(value);
    onChange(value);
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleChange}
      className={cn(
        enabled ? styles.toggle : styles.notToggle,
        styles.toggleButton,
      )}
    >
      <span
        className={cn(
          enabled ? styles.active : styles.notActive,
          styles.figure,
        )}
      />
    </Switch>
  );
};

export default ToggleButton;
