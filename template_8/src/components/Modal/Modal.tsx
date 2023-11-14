import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';

export interface ModalProps {
  children: React.ReactNode;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ children, setModalOpened }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className={styles.modal} onClick={() => setModalOpened(false)}>
          {children}
        </div>,
        ref.current,
      )
    : null;
};

export default Modal;
