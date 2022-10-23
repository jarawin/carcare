import React, { useState, useEffect } from 'react';
import Flag from 'react-flagkit';
import classNames from '../../utils/classNames';
import flu from '../../utils/firstLetterUpper';

const languages = [
  {
    flag: 'US',
    lang: 'en',
    name: 'english',
  },
  {
    flag: 'TH',
    lang: 'th',
    name: 'thai',
  },
];

function MultiLang(props) {
  const [lang, setLang] = props.lang;
  const [isOpen, setIsOpen] = props.isOpen;

  const [flag, setFlag] = useState({ flag: 'US', name: 'english' });

  const handleChangeLang = (newLang) => {
    const idx = languages.findIndex((item) => item.lang === newLang);

    if (idx !== -1) {
      setFlag({ flag: languages[idx].flag, name: languages[idx].name });
      setLang(newLang);
    } else {
      alert('ERROR : Language not found');
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const defaultLang = localStorage.getItem('language') ?? 'en';
    const idx = languages.findIndex((item) => item.lang === defaultLang);
    setFlag({ flag: languages[idx].flag, name: languages[idx].name });
    if (defaultLang !== lang && languages[idx].flag !== lang) {
      setLang(defaultLang);
    }
  }, []);

  return (
    <div className="flex items-center md:order-2 ">
      <button
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
        className="mr-2 inline-flex justify-center items-center p-2 text-sm dark:text-gray-300 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flag country={flag.flag} className="mr-2" />
        {flu(flag.name)}
      </button>

      <div
        className={classNames(
          isOpen ? '' : 'hidden',
          ' fixed left-0 top-0 w-full h-full backdrop-blur-sm backdrop-brightness-75'
        )}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          isOpen ? '' : 'hidden',
          ' relative z-40 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700'
        )}
      >
        <ul className="absolute bg-gray-200  shadow dark:bg-gray-700 right-0 bottom-5 rounded-lg">
          {languages.map((language, index) => (
            <li key={index}>
              <a
                className="block py-2 pr-10 pl-4 text-sm text-gray-700 hover:rounded-lg hover:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleChangeLang(language.lang)}
              >
                <div className="inline-flex items-center dark:text-white">
                  <Flag country={language.flag} className="mr-2" />
                  {flu(language.name)}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultiLang;
