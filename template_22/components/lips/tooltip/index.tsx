import type { FC, PropsWithChildren } from 'react';
import React, { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import styles from './styles.module.scss';

interface ITooltipProps extends PropsWithChildren {
  text?: string;
  icon?: string;
  classNamePanel?: string;
  classNameBtn?: string;
}

const Tooltip: FC<ITooltipProps> = ({
  text,
  icon,
  classNamePanel,
  classNameBtn,
  children,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        type="button"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className={cn(styles.button, classNameBtn)}
      >
        {text && <span>{text}</span>}
        {icon && (
          <Image
            src={icon}
            alt="icon"
          />
        )}
        {visible && (
          <div className={cn(styles.panel, classNamePanel)}>{children}</div>
        )}
      </button>
    </div>
  );
};

export default Tooltip;
