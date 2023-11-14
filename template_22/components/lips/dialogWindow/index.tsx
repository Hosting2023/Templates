import { FC, useEffect, useRef, useState } from 'react';
import React from 'react';
import Sheet from 'react-modal-sheet';
import Image from 'next/image';

import { Button } from '@/components/lips';
import { getClassNames } from '@/components/lips/dialogWindow/config';
import { IDialogWindowProps } from '@/components/lips/dialogWindow/interfaces/IDialogWindowProps';
import { useResizeWindow } from '@/hooks/useResizeWindow';

import { isShowButtonContent } from './helpers/isShowButtonContent';
import { ButtonContentType } from './interfaces/ButtonContentType';

import styles from './styles.module.scss';

const DialogWindow: FC<IDialogWindowProps> = ({
  isOpen,
  onClose,
  buttonName,
  buttonClassName,
  startIcon,
  endIcon,
  className,
  children,
  modal = false,
  withoutPadding = false,
  withoutGap = false,
  size = 'normal',
  direction = 'down',
}) => {
  const { isMobile } = useResizeWindow();

  const buttonContent: ButtonContentType = {
    buttonName,
    startIcon,
    endIcon,
  };

  const { dialogPanelClassNames, sheetContainerClassNames } = getClassNames({
    modal,
    withoutPadding,
    withoutGap,
    isMobile,
    size,
    direction,
    className,
  });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(isOpen);

  const fixedBgRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpenModal(isOpen);
  }, [isOpen]);

  const handleClose = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | MouseEvent
      | TouchEvent
      | PointerEvent,
  ) => {
    const condition = isMobile
      ? backdropRef.current?.classList[0] ===
        (e.target as HTMLDivElement).classList[0]
      : fixedBgRef.current?.getAttribute('id') ===
        (e.target as HTMLDivElement).getAttribute('id');

    if (condition) {
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true);
    }
  };

  return (
    <>
      {isShowButtonContent(buttonContent) && (
        <Button
          className={buttonClassName}
          onClick={onClose}
        >
          {buttonContent.startIcon && (
            <Image
              src={buttonContent.startIcon}
              alt={buttonContent.startIcon.toString()}
            />
          )}
          {buttonContent.buttonName}
          {buttonContent.endIcon && (
            <Image
              src={buttonContent.endIcon}
              alt={buttonContent.endIcon.toString()}
            />
          )}
        </Button>
      )}

      <Sheet
        isOpen={isOpenModal}
        onClose={onClose}
        detent="content-height"
        tweenConfig={{ ease: 'easeOut', duration: isMobile ? 0.3 : 0 }}
        disableDrag={!isMobile}
        className={styles.modalSheet}
      >
        <Sheet.Container className={sheetContainerClassNames}>
          <div
            id="fixedBg"
            ref={fixedBgRef}
            className={styles.fixed}
            onClick={handleClose}
          >
            {isMobile && <Sheet.Header className={styles.header} />}
            <Sheet.Content className={dialogPanelClassNames}>
              {children}
            </Sheet.Content>
          </div>
        </Sheet.Container>
        <Sheet.Backdrop
          ref={backdropRef}
          onTap={handleClose}
        />
      </Sheet>
    </>
  );
};

export default DialogWindow;
