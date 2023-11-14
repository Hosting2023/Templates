import Home from '@/components/screens/home/Home';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { i18n } = useTranslation();

  return (
    <div
      style={
        i18n.language === 'he' ? { direction: 'rtl' } : { direction: 'ltr' }
      }
    >
      <Home />
    </div>
  );
}
