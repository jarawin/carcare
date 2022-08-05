import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { MenuEn, MenuTh } from '../languages/menu';
import { NavEn, NavTh } from '../languages/navbar';
import { HomeEn, HomeTh } from '../languages/home';

const resources = {
  en: {
    translation: {
      menu: MenuEn,
      nav: NavEn,
      home: HomeEn,
    },
  },
  th: {
    translation: {
      menu: MenuTh,
      nav: NavTh,
      home: HomeTh,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') ?? 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
