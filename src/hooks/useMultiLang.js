import i18next from 'i18next';

function useLanguage() {
    const language = i18next.language;
    const newLanguage = language === 'en' ? 'th' : 'en';

    const setLanguage = (lang = newLanguage) => {
        i18next.changeLanguage(lang);
        localStorage.setItem('language', newLanguage);
    };

    return [language, setLanguage];
}

export default useLanguage;
