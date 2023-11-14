import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { Transition } from '@headlessui/react';

import styles from './styles.module.scss';

interface ITransitionProps extends PropsWithChildren {
  show: boolean;
  className?: string;
}

const CustomTransition: FC<ITransitionProps> = ({
  show,
  children,
  className,
}) => (
  <Transition
    appear
    className={className}
    show={show}
    enter={styles.transitionEnter}
    enterFrom={styles.transitionLeaveTo}
    enterTo={styles.transitionEnterTo}
    leave={styles.transitionEnter}
    leaveFrom={styles.transitionEnterTo}
    leaveTo={styles.transitionLeaveTo}
  >
    {children}
  </Transition>
);

export default CustomTransition;
