// Translations
import i18n from 'i18next';

// Mantine
import { Button } from '@mantine/core';

const LanguageSwitcher = () => {
  const switchLanguage = () => {
    i18n.language === 'es'
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('es');
  };

  return (
    <Button onClick={() => switchLanguage()}>
      {i18n.language === 'es' ? 'ES' : 'EN'}
    </Button>
  );
}

export default LanguageSwitcher;
