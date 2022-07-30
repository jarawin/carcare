import React from 'react';
import ClassNames from '../../../utils/classNames';

function Menu(props) {
  const [isOpen, setIsOpen] = props.isOpen;
  const pages = [
    {
      name: 'Home',
      url: '/',
      current: 'page',
    },
    {
      name: 'Services',
      url: '/services',
      current: '',
    },
    {
      name: 'Booking',
      url: '/booking',
      current: '',
    },
  ];

  return (
    <div
      className={ClassNames(
        isOpen ? 'block' : 'hidden',
        'justify-between items-center w-full md:flex md:w-auto md:order-1'
      )}
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {pages.map((page, index) => (
          <li key={index}>
            <a
              href={page.url}
              className="block py-2 pr-4 pl-3 text-md text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
