import React, { useState } from 'react';
import Logo from './components/Logo';
import Menu from './components/Menu';
// import './navbar.css';
import { FiMenu } from 'react-icons/fi';

function Navbar2() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  return (
    <>
      <nav className=" sticky bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600  font-itim">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Logo />

          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Get started
            </button>

            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setIsOpenMobile(!isOpenMobile)}
            >
              <span className="sr-only">Open main menu</span>
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

          <Menu isOpen={[isOpenMobile, setIsOpenMobile]} />
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
