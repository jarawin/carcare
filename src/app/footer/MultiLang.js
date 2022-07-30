import React, { useState } from 'react';
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

function MultiLang() {
  const [isOpen, setIsOpen] = useState(false);
  const [idxLang, setIdxLang] = useState(0);

  const handleChangeLang = (lang) => {
    setIdxLang(languages.findIndex((l) => l.name == lang));
    setIsOpen(false);
  };

  return (
    <div className="flex items-center md:order-2 ">
      <button
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
        className="mr-2 inline-flex justify-center items-center p-2 text-sm dark:text-neutral-300 text-neutral-500 rounded cursor-pointer hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flag country={languages[idxLang].flag} className="mr-2" />
        {flu(languages[idxLang].name)}
      </button>

      <div
        className={classNames(
          isOpen ? '' : 'hidden',
          ' relative z-40 my-4 text-base list-none bg-white rounded divide-y divide-neutral-100 shadow dark:bg-neutral-700'
        )}
      >
        <ul className="absolute bg-neutral-200 right-0 bottom-5 rounded-lg">
          {languages.map((language, index) => (
            <li key={index}>
              <a
                className="block py-2 pr-10 pl-4 text-sm text-neutral-700 hover:rounded-lg hover:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-600 dark:hover:text-white"
                onClick={() => handleChangeLang(language.name)}
              >
                <div className="inline-flex items-center">
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
