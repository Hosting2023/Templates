import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const SwitchLanguage: FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    i18n.language === 'he' ? 'he' : 'en',
  );

  const handleLanguageChange = () => {
    const newLanguage = language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <div className={styles.languageSlider}>
      <label>En</label>
      <input
        type="range"
        min="0"
        max="1"
        step="1"
        value={language === 'en' ? '0' : '1'}
        onChange={handleLanguageChange}
      />
      <label>He</label>
    </div>
  );
};

export default SwitchLanguage;
