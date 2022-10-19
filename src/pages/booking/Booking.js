import React from 'react';

import {
  selectDataBooking,
  setNickname,
  setTel,
} from '../../redux/slices/bookingSlice';
import { getForBooking } from '../../redux/slices/loginSlice';
import { useSelector, useDispatch } from 'react-redux';

import { AiFillCar } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';

import UserStep from './components/UserStep';
import CarStep from './components/CarStep';
import ServiceStep from './components/ServiceStep';

import verifyBooking from '../../verifydata/verifyBooking';

function Booking() {
  const dispatch = useDispatch();
  const db = useSelector(selectDataBooking);
  const forBooking = useSelector(getForBooking);

  const [step, setStep] = React.useState(
    parseInt(localStorage.getItem('step') || '1')
  );
  const [tap, setTap] = React.useState(<UserStep />);
  const [error, setError] = React.useState({
    isError: false,
    message: '',
  });

  React.useEffect(() => {
    if (db.nickname == '' && forBooking.first_name) {
      dispatch(setNickname(forBooking.first_name));
    }

    if (db.tel == '' && forBooking.tel) {
      dispatch(setTel(forBooking.tel));
    }
  }, []);

  React.useEffect(() => {
    const veri = verifyBooking(db, step);
    if (veri != '') {
      setError({ isError: true, message: veri });
    } else {
      setError({ isError: false, message: '' });
    }

    switch (step) {
      case 1:
        setTap(<UserStep />);
        break;
      case 2:
        setTap(<CarStep />);
        break;
      case 3:
        setTap(<ServiceStep />);
        break;
      default:
        setTap(<UserStep />);
        break;
    }
  }, [step, db]);

  return (
    <div className=" items-center justify-center px-4 sm:px-6 lg:px-8 grid grid-cols-1 ld:grid-cols-5">
      <div className="col-span-2 mb-10  max-w-md w-full space-y-8 bg-gray-100 dark:bg-gray-300  p-10 rounded-2xl mt-10 mx-auto">
        <div>
          <h2 className="text-center text-2xl lg:text-3xl font-extrabold text-gray-900">
            จองคิวออนไลน์
            <br />
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <a href="#" className="font-medium text-red-600 hover:text-red-500">
              KSR Carcare
            </a>
          </p>
        </div>

        <ol className="items-center sm:flex flex justify-between">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-white rounded-full ring-8 ring-white dark:bg-gray-900  dark:ring-gray-900 shrink-0">
                <FaUserAlt className="w-5 h-5 text-red-600 dark:text-red-700" />
              </div>

              <div
                className={
                  (step > 1
                    ? 'bg-red-400 dark:bg-red-500'
                    : 'bg-gray-200 dark:bg-gray-500') +
                  ' w-36 md:w-44 absolute  h-0.5 '
                }
              ></div>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-red-200 rounded-full ring-0 ring-white dark:bg-red-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <div className="flex z-10 justify-center items-center w-6 h-6 bg-white rounded-full ring-8 ring-white dark:bg-gray-900  dark:ring-gray-900 shrink-0">
                  <AiFillCar
                    className={
                      (step >= 2
                        ? 'text-red-600 dark:text-red-700'
                        : 'text-gray-600 dark:text-gray-300') + ' w-7 h-7 '
                    }
                  />
                </div>
              </div>
              <div
                className={
                  (step > 2
                    ? 'bg-red-400 dark:bg-red-500'
                    : 'bg-gray-200 dark:bg-gray-500 ') +
                  ' w-36 md:w-44 absolute  h-0.5 '
                }
              ></div>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-6 h-6 bg-red-200 rounded-full ring-0 ring-white dark:bg-red-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <div className="flex z-10 justify-center items-center w-6 h-6 bg-white rounded-full ring-8 ring-white dark:bg-gray-900  dark:ring-gray-900 shrink-0">
                  <AiFillCar
                    className={
                      (step >= 3
                        ? 'text-red-600 dark:text-red-700'
                        : 'text-gray-600 dark:text-gray-300') + ' w-7 h-7 '
                    }
                  />
                </div>
              </div>
            </div>
          </li>
        </ol>

        <div>
          {tap}

          <div
            className={
              (error.isError ? ' text-red-600' : 'text-green-600') +
              ' mt-2  text-sm text-start'
            }
          >
            {error.message}
          </div>

          {/*NOTE Button Booking*/}
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={step <= 1}
              onClick={() => {
                setStep(step - 1);
                localStorage.setItem('step', step - 1);
              }}
              className={
                (step > 1
                  ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500 '
                  : 'disabled bg-gray-400 cursor-not-allowed') +
                ' group mt-6 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 '
              }
            >
              ย้อนกลับ
            </button>
            <button
              type="submit"
              disabled={step >= 4 || error.isError}
              onClick={() => {
                if (step === 3) {
                  alert('ยืนยันการจอง');
                } else {
                  setStep(step + 1);
                  localStorage.setItem('step', step + 1);
                }
              }}
              className={
                (!error.isError && step < 4
                  ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500 '
                  : 'disabled bg-gray-400 cursor-not-allowed') +
                ' group mt-6 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 '
              }
            >
              {step < 3 ? 'ต่อไป' : 'ยืนยันการจอง'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
