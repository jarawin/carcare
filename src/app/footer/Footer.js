// library
import React, { useState } from 'react';

// components
import MultiLang from './MultiLang';
import { CgDarkMode } from 'react-icons/cg';

// hooks
import useDarkMode from '../../hooks/useDarkMode';
import useMultiLang from '../../hooks/useMultiLang';

function Footer() {
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [theme, setTheme] = useDarkMode();
  const [lang, setLang] = useMultiLang();

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 py-6 px-4 bg-gray-100 dark:bg-gray-700 items-end justify-between pl-7">
        <div className="flex mx-auto mb-4 md:mx-0 md:mb-0">
          <div className="flex items-center md:order-2 ">
            {/* NOTE ChangeDarkMode  */}
            <button
              type="button"
              className="mr-2 inline-flex justify-center items-center p-2 text-sm dark:text-gray-300 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={handleChangeTheme}
            >
              <CgDarkMode className="w-6 h-6 cursor-pointer text-gray-600 dark:text-gray-100 mr-2" />
              DarkMode
            </button>
          </div>
          {/* NOTE ChangeMultiLanguage */}
          <MultiLang
            lang={[lang, setLang]}
            isOpen={[isOpenLang, setIsOpenLang]}
          />
        </div>

        {/* NOTE BussinessName */}
        <span className="text-sm text-gray-500 dark:text-gray-300 text-center md:text-end my-auto">
          © 2022{' '}
          <a href="/" className=" hover:underline">
            KSR Carcare™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
