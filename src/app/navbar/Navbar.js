import { Fragment, useEffect, useState } from 'react';
import React from 'react';

import { useTranslation } from 'react-i18next';

import { Dialog, Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { useDispatch, useSelector } from 'react-redux';
import classNames from '../../utils/classNames';

import Banner from './components/Banner';
import MobileNavbar from './components/MobileNavbar';
import Login from './components/Login';

function Navbar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const pages = [
    { name: 'home', href: '/' },
    { name: 'services', href: '/services' },
    { name: 'booking', href: '/booking' },
    { name: 'member', href: '/member' },
    { name: 'queue', href: '/queue' },
  ];

  //   const MenuSetting = [
  //     {
  //       name: language === 'en' ? 'thai' : 'english',
  //       icon: TranslateIcon,
  //     },
  //     {
  //       name: theme === 'dark' ? 'lightmode' : 'darkmode',
  //       icon: theme === 'dark' ? SunIcon : MoonIcon,
  //     },
  //     {
  //       name: isAdminMode ? 'usermode' : 'adminmode',
  //       icon: isAdminMode ? LockOpenIcon : LockClosedIcon,
  //     },
  //   ];

  // useEffect(() => {
  //      if (isLoggedIn && isAdmin) {
  //           setSetting(defaultSetting);
  //      } else {
  //           setSetting(defaultSetting.slice(0, 2));
  //      }
  // });

  // set active page
  //   useEffect(() => {
  //     const pathname = window.location.pathname;
  //     const lastIndexPath = pathname.split('/').pop();
  //     dispatch(setActivePage(lastIndexPath ? lastIndexPath : 'home'));
  //   }, []);

  return (
    <header className="relative">
      <MobileNavbar isOpen={[isOpenMobileMenu, setIsOpenMobileMenu]} />
      <Banner />
      <nav
        aria-label="Top"
        className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900 shadow-lg rounded"
      >
        <div className="h-16 flex items-center max-w-7xl mx-auto">
          {/* NOTE Icon Mobile */}
          <button
            type="button"
            className="mr-2 bg-white  dark:bg-white p-2 rounded-md text-gray-400 dark:text-black md:hidden"
            onClick={() => setIsOpenMobileMenu(true)}
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* NOTE Logo */}
          <div className="flex lg:ml-4">
            <a href="/">
              <span className="sr-only">car care</span>
              <h1 className="ml-2 mr-5 h-8 text-2xl font-serif font-extrabold w-10 text-zinc-700 dark:text-white">
                TCC
              </h1>
            </a>
          </div>

          {/* NOTE Flyout Menus */}
          <Popover.Group className="hidden md:ml-5 md:block md:self-stretch">
            <div className="h-full flex md:space-x-6 lg:space-x-8">
              {pages.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  className={classNames(
                    p.id == 'home'
                      ? 'text-red-600 dark:text-red-600 dark:hover:text-red-800 font-bold border-b-2'
                      : 'text-gray-700 dark:text-white hover:text-gray-800 dark:hover:text-red-600',
                    'flex items-center text-sm font-medium  border-red-600'
                  )}
                >
                  {t('menu.' + p.name)}
                </a>
              ))}
            </div>
          </Popover.Group>

          {/* NOTE Login/Profile and Setting */}
          <div className="ml-auto flex items-center">
            <div className="flex items-center mx-3">
              <Login />
              {/* {isLoggedIn ? <Profile /> : <Login />}
                                <span className="ml-4 mr-3 h-6 w-px bg-zinc-200 hidden md:block" />
                                <Setting setting={setting} /> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
