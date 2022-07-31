import React, { useState } from 'react';
import Logo from './components/Logo';
import Menu from './components/Menu';
import './navbar.css';
import { FiMenu } from 'react-icons/fi';
import Login from './components/Login';
import Profile from './components/Profile';

function Navbar2() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <nav className=" sticky bg-white px-2 sm:px-4 py-2.5 dark:bg-neutral-900  w-full z-20 top-0 left-0 border-b border-neutral-200 dark:border-neutral-600  font-itim">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Logo />

          <div className="flex md:order-2">
            {isLogin ? <Profile /> : <Login />}

            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
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
