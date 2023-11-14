import React, {
  FC,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import burger from '@/assets/icons_header/baseline-menu.svg';
import PopupMenu from '@/components/header/components/popupMenu';
import { AppContext } from '../../../../pages/_app';

export interface IMaidListProps {
  filterRef?: RefObject<HTMLDivElement>;
  benefitsRef?: RefObject<HTMLDivElement>;
  aboutMeRef?: RefObject<HTMLDivElement>;
  servicesRef?: RefObject<HTMLDivElement>;
  scheduleRef?: RefObject<HTMLDivElement>;
  reviewsRef?: RefObject<HTMLDivElement>;
  footerRef?: RefObject<HTMLDivElement>;
}

const MaidList: FC<IMaidListProps> = ({ filterRef, ...props }) => {
  const Heb = useContext(AppContext);
  const [showPopupMenu, setShowPopupMenu] = useState(false);
  const popupMenuRef = useRef<HTMLDivElement | null>(null);

  const handleClickBurger = () => {
    setShowPopupMenu(true);
  };

  const handleClickButton = () => {
    filterRef?.current?.scrollIntoView();
  };

  const handleClickOutside = (event: Event) => {
    if (
      popupMenuRef.current &&
      !popupMenuRef.current.contains(event.target as Node)
    ) {
      setShowPopupMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.menuBurger}
        onClick={handleClickBurger}
      >
        <Image
          src={burger as unknown as string}
          alt="icon"
        />
      </div>
      <div className={styles.containerText}>
        <div className={styles.cont1}>{!Heb ? 'Professional' : 'מקצועי'}</div>
        <div className={styles.cont2}>{!Heb ? 'CLEANING' : 'ניקוי'}</div>
        <div className={styles.cont3}>
          {!Heb ? 'for a flawless home' : 'לבית ללא רבב'}
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => handleClickButton()}
      >
        {!Heb ? 'Go to filter' : 'עבור למסנן'}
      </button>
      <div>
        {showPopupMenu && (
          <PopupMenu
            {...props}
            ref={popupMenuRef}
          />
        )}
      </div>
    </div>
  );
};

export default MaidList;
