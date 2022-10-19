import React from 'react';
import ClassNames from '../../../utils/classNames';
import { useTranslation } from 'react-i18next';
import classNames from '../../../utils/classNames';

function Menu(props) {
  const [isOpen, setIsOpen] = props.isOpen;
  const [currPage, setCurrPage] = React.useState('home');
  const { t } = useTranslation();

  const pagesUser = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Services',
      url: '/services',
    },
    {
      name: 'Booking',
      url: '/booking',
    },
  ];

  React.useEffect(() => {
    const path = window.location.pathname;
    const page = path.split('/')[1] == '' ? 'home' : path.split('/')[1];
    setCurrPage(page);
  }, []);

  return (
    <div
      className={ClassNames(
        isOpen ? 'block' : 'hidden',
        'justify-between items-center w-full md:flex md:w-auto md:order-1 '
      )}
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 mt-4 rounded-lg border-2  border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
        {pagesUser.map((page, index) => (
          <li key={index}>
            <a
              href={page.url}
              className={classNames(
                currPage == page.name.toLocaleLowerCase()
                  ? 'bg-red-900 md:bg-red-800 md:underline '
                  : '',
                'block py-2 pr-4 pl-3 text-md text-white rounded-md hover:bg-red-700 text-lg md:hover:bg-transparent md:hover:text-black md:p-0 '
              )}
            >
              {t('menu.' + page.name.toLocaleLowerCase())}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
