// library
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import jwt from 'jwt-decode';

// redux
import {
  getIsLogin,
  handleLogin,
  setIsCustomer,
  setFullData,
} from '../../redux/slices/loginSlice';
import customersAPI from '../../apis/customers';
import { addOrder, selectOrder } from '../../redux/slices/orderSlice';
import mockOrders from '../../data/mock/orders';

// component
import Menu from './components/Menu';
import Profile from './components/Profile';
import Banner from './components/Banner';

// utils
import classNames from '../../utils/classNames';

// hooks
import useMultiLang from '../../hooks/useMultiLang';

// style
import './navbar.css';

function Navbar() {
  const [isOpenMobile, setIsOpenMobile] = useState(false); // popup menu mobile
  const [isOpenLogin, setIsOpenLogin] = useState(true); // popup login

  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLogin);
  const order = useSelector(selectOrder);

  const [lang, setLang] = useMultiLang();

  const handleCheckIsCustomer = async (customer_id) => {
    try {
      const res = await customersAPI.getCustomer(customer_id);
      dispatch(setIsCustomer(res?.data?.isCustomer));
      console.log('res.data');
      console.log(res.data.data);

      if (!res?.data?.isCustomer) {
        window.location.href = '/login?callback=' + window.location.pathname;
      } else {
        dispatch(setFullData(res?.data?.data));
      }
    } catch (error) {
      alert(JSON.stringify('checkIsCustomer error'));
      console.log(error);
    }
  };

  const afterLogin = ({ credential, select_by }) => {
    const response = jwt(credential);
    console.log('select_by', select_by);
    console.log('response', response);

    handleCheckIsCustomer(response?.sub);
    dispatch(handleLogin(response));
  };

  const handleAddMockOrder = () => {
    const len = order.length;
    dispatch(addOrder([...order, mockOrders[len]]));
  };

  useEffect(() => {
    const google = window.google;
    document.body.classList.add('dark:bg-gray-800');

    google?.accounts?.id?.initialize({
      client_id:
        '277236884335-7vn51t639c39ciovhrnm3r84ge9qtfu6.apps.googleusercontent.com',
      callback: afterLogin,
    });

    google?.accounts?.id?.renderButton(document.getElementById('login'), {
      type: window.innerWidth <= 768 ? 'icon' : 'standard', // icon, standard
      logo_alignment: 'left', // left, center
      text: 'continue_with', // signin_with, signup_with, continue_with, signin
      theme: 'outline', // filled_blue, filled_black, outline
      shape: 'circle', // rectangular, pill, circle, square
      locale: lang == 'th' ? 'th-th' : 'en-us', // th-th, en-us
      size: 'large', // small, medium, large
    });

    if (!isLogin) {
      google?.accounts?.id?.prompt();
    }
  }, [isLogin]);

  return (
    <>
      <Banner />
      <nav className=" sticky  bg-red-800 px-2 sm:px-4 py-2.5   w-full z-50 top-0 left-0 border-b border-gray-600  font-itim">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          {/* NOTE LOGO */}
          <a
            className="flex items-center cursor-pointer"
            onClick={handleAddMockOrder}
          >
            <span className="mr-1 ml-1 font-bold text-2xl self-center text-red-700 whitespace-nowrap dark:text-white">
              <img src={'/logo/7.svg'} className="h-12 lg:h-14 mr-1"></img>
            </span>

            <span className="font-itim  text-xl lg:text-2xl font-semibold whitespace-nowrap text-white">
              KSR Carcare
            </span>
          </a>

          <div className="flex md:order-2">
            {/* NOTE Backdrop */}
            <div
              className={classNames(
                isOpenLogin && !isLogin ? '' : 'hidden',
                ' fixed left-0 top-0 w-full h-full backdrop-blur-sm backdrop-brightness-75'
              )}
              onClick={() => setIsOpenLogin(false)}
            ></div>

            {/* NOTE Profile & Login */}
            {isLogin ? <Profile /> : <div className="mr-3" id="login"></div>}

            {/* NOTE Button Mobile Menu */}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              onClick={() => setIsOpenMobile(!isOpenMobile)}
            >
              <span className="sr-only">Open main menu</span>
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

          {/* NOTE Menu List */}
          <Menu isOpen={[isOpenMobile, setIsOpenMobile]} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
