import React, { useState } from 'react';
import classNames from '../../../utils/classNames';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="flex items-center md:order-2 relative">
      <button
        type="button"
        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/carwash.jpg" alt="user photo" />
      </button>

      <div
        class={classNames(
          isOpen ? '' : 'hidden ',
          'absolute right-0 top-6 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
        )}
        id="user-dropdown"
        onBlur={() => setIsOpen(false)}
      >
        <div class="py-3 px-4">
          <span class="block text-sm text-gray-900 dark:text-white">
            Bonnie Green
          </span>
          <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
            name@flowbite.com
          </span>
        </div>
        <ul class="py-1" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
