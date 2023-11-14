import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import styles from './Steps.module.scss';
import SpongeSvg from './assets/sponge.svg';

const Steps: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.steps_wrapper}>
      <div className={styles.steps_content}>
        <div className={styles.steps_content_left}>
          <div className={styles.steps_content_left_wrapper}>
            <div className={styles.steps_line} style={{ width: '17%' }}></div>
            <span
              style={
                i18n.language === 'he'
                  ? { marginRight: '7%' }
                  : { marginLeft: '7%' }
              }
            >
              {t('step1')}
            </span>
          </div>
          <div className={styles.steps_content_left_wrapper}>
            <div className={styles.steps_line} style={{ width: '45%' }}></div>
            <span
              style={
                i18n.language === 'he'
                  ? { marginRight: '7%' }
                  : { marginLeft: '7%' }
              }
            >
              {t('step2')}
            </span>
          </div>
          <div className={styles.steps_content_left_wrapper}>
            <div className={styles.steps_line} style={{ width: '65%' }}></div>
            <span
              style={
                i18n.language === 'he'
                  ? { marginRight: '7%' }
                  : { marginLeft: '7%' }
              }
            >
              {t('step3')}
            </span>
          </div>
        </div>
        <div className={styles.steps_content_right}>
          <Image src={SpongeSvg} alt="Sponge Image" fill />
        </div>
      </div>
    </div>
  );
};

export default Steps;
