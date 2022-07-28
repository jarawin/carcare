import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { MenuEn, MenuTh } from '../languages/menu';
import { NavEn, NavTh } from '../languages/navbar';

const resources = {
    en: {
        translation: {
            menu: MenuEn,
            nav: NavEn,
        },
    },
    th: {
        translation: {
            menu: MenuTh,
            nav: NavTh,
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
