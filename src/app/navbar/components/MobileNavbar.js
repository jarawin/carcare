import React from 'react';

import { Fragment, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import {
  SunIcon,
  MoonIcon,
  TranslateIcon,
  LockClosedIcon,
  LockOpenIcon,
} from '@heroicons/react/outline';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { useDispatch, useSelector } from 'react-redux';
import classNames from '../../../utils/classNames';

function MobileNavbar(props) {
  const [open, setOpen] = props.isOpen;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 md:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 flex z-40">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative max-w-[50%] w-full bg-white dark:bg-zinc-800 shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="pt-5 pb-2 flex">
                <button
                  type="button"
                  className="ml-4 p-2 rounded-md inline-flex items-center justify-center text-gray-400 dark:text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="px-4 space-y-2">
                {/* {props.pages.map((page, idx) => (
                                    <div key={idx} className="flow-root">
                                        <a
                                            href={page.href}
                                            className="p-2 block font-medium text-zinc-900 dark:text-white"
                                        >
                                            {t(`menu.${page.name}`)}
                                        </a>
                                    </div>
                                ))} */}
              </div>

              <div className="mt-4 py-4 space-y-2 border-t border-zinc-800 dark:border-white px-2 mx-2">
                {/* {setting.map((item) => (
                  <div key={item.name} className="flow-root">
                    <a
                      onClick={item.onClick}
                      className="p-2 block font-medium text-zinc-900 dark:text-white cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </div>
                ))} */}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default MobileNavbar;
