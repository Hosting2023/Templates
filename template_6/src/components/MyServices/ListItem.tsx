import React, { FC, useState } from 'react';
import Image from 'next/image';

import styles from './MyServices.module.scss';
import arrowDown from './assets/arrowDown.svg';

interface MyServicesProps {
  name: string;
  text: string[];
}

const ListItem: FC<MyServicesProps> = ({ name, text }) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <ul className={styles.services_content_right_list_item_wrapper}>
      <div className={styles.services_content_right_list_item_top_wrapper}>
        <span className={styles.services_content_right_list_item_name}>
          {name}
        </span>
        <Image
          src={arrowDown}
          alt={'Arrow img'}
          className={
            !opened
              ? styles.services_arrowDown
              : styles.services_arrowDown_reverse
          }
          onClick={() => {
            setOpened(!opened);
          }}
        />
      </div>
      {opened ? (
        <div className={styles.services_content_right_list_item_dropdown}>
          {text.map((item, index) => (
            <span
              key={index}
              className={styles.services_content_right_list_item_dropdown_text}
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        ''
      )}
    </ul>
  );
};

export default ListItem;
