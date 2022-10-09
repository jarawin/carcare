// library
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { getDataUser, logout } from '../../../redux/slices/loginSlice';

// utils
import classNames from '../../../utils/classNames';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const dataUser = useSelector(getDataUser);
  // const isLogin = useSelector(getIsLogin);

  return (
    <div className="flex items-center md:order-2 relative">
      {/* NOTE Picture Profile */}
      <button
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="w-9 h-9 rounded-full"
          src={dataUser.image_url}
          alt="user photo"
        />
      </button>

      {/* NOTE Dropdown Profile */}
      <div
        className={classNames(
          isOpen ? '' : 'hidden ',
          'absolute right-0 top-6 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
        )}
        id="user-dropdown"
        onBlur={() => setIsOpen(false)}
      >
        <div className="py-3 px-4">
          <span className="block text-sm text-gray-900 dark:text-white">
            {dataUser.first_name}
          </span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
            {dataUser.email}
          </span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
          <li>
            <a
              href="/profile"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              ข้อมูลส่วนบุคคล
            </a>
          </li>
          <li>
            <button
              onClick={() => dispatch(logout())}
              className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              ออกจากระบบ
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
