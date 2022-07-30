import { useTranslation } from 'react-i18next';
import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BsFacebook, BsLine, BsGoogle } from 'react-icons/bs';

import { useDispatch } from 'react-redux';

function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const loginNavigation = [
    {
      name: 'Line',
      icon: BsLine,
    },
    {
      name: 'Facebook',
      icon: BsFacebook,
    },
    {
      name: 'Google',
      icon: BsGoogle,
    },
  ];

  const handleLogin = () => {
    alert('Login');
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="max-w-xs  rounded-full flex items-center text-sm">
        <div
          type="button"
          className=" text-zinc-700 dark:text-white hover:text-red-600   dark:hover:text-red-600 rounded-full mr-2"
        >
          <a className="text-sm font-medium text-zinc-700 dark:text-white hover:text-red-600 dark:hover:text-red-600">
            {t('nav.login')}
          </a>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right mt-1 absolute right-0 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {loginNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {
                <div className="flex flex-row  items-center  hover:bg-red-600 hover:text-white rounded">
                  <item.icon className="ml-2 pl-1 basis-1/6" />
                  <a
                    onClick={handleLogin}
                    className="hover:text-white block px-2 py-2 text-sm  text-zinc-700 basis-5/6"
                  >
                    {item.name}
                  </a>
                </div>
              }
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Login;
