import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLogin,
  getDataUser,
  setIsCustomer,
  updateProfile,
  getIsCustomer,
  getCustomerInfo,
} from '../../redux/slices/loginSlice';
import customers from '../../apis/customers';

import { AiFillLock, AiFillUnlock } from 'react-icons/ai';
import 'flowbite';
import { useTranslation } from 'react-i18next';

function Profile() {
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLogin);
  const isCustomer = useSelector(getIsCustomer);
  const dataUser = useSelector(getDataUser);
  const customerInfo = useSelector(getCustomerInfo);
  const [error, setError] = useState({ isError: false, message: '' });
  const [pass, setPass] = useState(false);
  const {t} = useTranslation();

  const handleUpdateProfile = (label, value) => {
    var temp = {
      first_name: dataUser.first_name,
      last_name: dataUser.last_name,
      email: dataUser.email,
      tel: dataUser.tel,
    };

    switch (label) {
      case 'first_name':
        temp.first_name = value;
        dispatch(updateProfile(temp));
        break;
      case 'last_name':
        temp.last_name = value;
        dispatch(updateProfile(temp));
        break;
      case 'email':
        temp.email = value;
        dispatch(updateProfile(temp));
        break;
      case 'tel':
        temp.tel = value;
        dispatch(updateProfile(temp));
        break;
      default:
        break;
    }
  };

  const verifyLogin = () => {
    if (dataUser.first_name === '') {
      return "First name can't be empty";
    }
    if (dataUser.last_name === '') {
      return "Last name can't be empty";
    }
    if (dataUser.email === '') {
      return "Email can't be empty";
    }
    if (dataUser.tel === '' || dataUser.tel.length < 10) {
      return "Phone number can't be empty or less than 10 digits";
    }
    return '';
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (verifyLogin()) {
      try {
        const res = await customers.updateCustomer(customerInfo);
        console.log('Updated customer');
        console.log(res);

        setError({ isError: false, message: res?.data?.msg });
        dispatch(setIsCustomer(true));
      } catch (error) {
        setError({ isError: true, message: error?.response?.data?.msg });
      }
    }
  };

  useEffect(() => {
    const verify_res = verifyLogin();
    if (verify_res === '') {
      setPass(true);
      setError({ isError: false, message: '' });
    } else {
      setPass(false);
      setError({ isError: true, message: verify_res });
    }
  }, [pass, dataUser]);

  return (
    <>
      <div className="min-h-full flex items-center justify-center h-screen px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 bg-gray-100 dark:bg-gray-300  p-10 rounded-2xl">
          <div>
            <h2 className="text-center text-2xl lg:text-3xl font-extrabold text-gray-900">
              {t("home.profileEdit")}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a
                href="#"
                className="font-medium text-red-600 hover:text-red-500"
              >
                KSR Carcare
              </a>
            </p>
          </div>

          <form className="mt-8">
            <div className="space-y-6">
              <div class="grid gap-6  md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    {t("home.nameEdit")}
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    value={dataUser.first_name ?? ''}
                    onChange={(e) => {
                      handleUpdateProfile('first_name', e.target.value);
                    }}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder={t("home.namePlaceholder_for_booking")}
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    {t("home.surnameEdit")}
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    value={dataUser.last_name ?? ''}
                    onChange={(e) => {
                      handleUpdateProfile('last_name', e.target.value);
                    }}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder={t("home.surnamePlaceholder_for_booking")} 
                    required
                  />
                </div>
              </div>

              <div class="">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {t("home.emailEdit")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={dataUser.email ?? ''}
                  onChange={(e) => {
                    handleUpdateProfile('email', e.target.value);
                  }}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                  placeholder="user@carcare.com"
                  required
                />
              </div>

              <div class="">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {t("home.telEdit")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={dataUser.tel ?? ''}
                  onChange={(e) => {
                    handleUpdateProfile('tel', e.target.value);
                  }}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                  placeholder="0987654321"
                  pattern="[0]{1}[6,8,9]{1}[0-9]{8}"
                  required
                />
              </div>
            </div>

            <div
              className={
                (error.isError ? ' text-red-600' : 'text-green-600') +
                ' mt-2  text-sm text-start'
              }
            >
              {error.message}
            </div>

            <div>
              <button
                type="submit"
                className={
                  (pass
                    ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500 '
                    : 'disabled bg-gray-400 cursor-not-allowed') +
                  ' group mt-6 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 '
                }
                disabled={!pass}
                onClick={handleUpdate}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {pass ? (
                    <AiFillUnlock
                      className={
                        (pass
                          ? 'text-red-500 group-hover:text-red-400'
                          : 'text-gray-500 group-hover:text-gray-600') +
                        ' h-5 w-5 '
                      }
                      aria-hidden="true"
                    />
                  ) : (
                    <AiFillLock
                      className={
                        (pass
                          ? 'text-red-500 group-hover:text-red-400'
                          : 'text-gray-500 group-hover:text-gray-600') +
                        ' h-5 w-5 '
                      }
                      aria-hidden="true"
                    />
                  )}
                </span>
                {t("home.updateEdit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Profile;
