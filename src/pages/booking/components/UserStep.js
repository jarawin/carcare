import React from 'react';
import {
  setNickname,
  setTel,
  setBookingTime,
  selectDataBooking,
  setDate,
  setTime,
} from '../../../redux/slices/bookingSlice';
import { useSelector, useDispatch } from 'react-redux';

import { HiPhone, HiUser } from 'react-icons/hi';
import { AiFillCar } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

// import dateAvailable from '../../../data/mock/dateAvailable';
import timeAvailable from '../../../data/mock/timeAvailable';

function getTimeStamp(t) {
  var parts = t.trim().split(' ');
  var date = parts[0].split('/');
  var time = (parts[1] ? parts[1] + ':00' : '00:00:00').split(':');

  var d = new Date(date[2], date[1] - 1, date[0], time[0], time[1], time[2]);
  return d.getTime() / 1000;
}

const getDateAvailable = (amount, startDate = new Date()) => {
  const dateAvailable = [];
  for (let i = 0; i < amount; i++) {
    dateAvailable.push({
      name: startDate.toLocaleDateString('th-TH', { weekday: 'long' }),
      date: startDate.toLocaleDateString('th-TH'),
    });
    startDate.setDate(startDate.getDate() + 1);
  }
  return dateAvailable;
};

function UserStep() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const db = useSelector(selectDataBooking);

  React.useEffect(() => {
    const t = getTimeStamp(db.date + ' ' + db.time);
    dispatch(setBookingTime(t ?? ''));
  }, [db]);

  return (
    <>
      {/*NOTE Enter name */}
      <label
        for="input-name"
        className="block mb-2 text-sm font-medium text-gray-900  "
      >

      {t("home.name_for_booking")}

      </label>
      <div className="relative mb-6 ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <HiUser className="h-5 w-5 absolute dark:text-white " />
        </div>
        <input
          type="text"
          id="input-name"
          value={db.nickname}
          onChange={(e) => dispatch(setNickname(e.target.value))}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 required w-full"
          placeholder= {t("home.namePlaceholder_for_booking")}
        />
      </div>

      {/*NOTE Enter phone number */}
      <label
        for="input-phone"
        className="block mb-2 text-sm font-medium text-gray-900 red"
      >
        {t("home.phoneNumber_for_booking")}
      </label>
      <div className="relative mb-6">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <HiPhone className="h-5 w-5 absolute dark:text-white" />
        </div>
        <input
          type="tel"
          id="input-phone"
          value={db.tel}
          onChange={(e) => dispatch(setTel(e.target.value))}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 pattern=[0-9]{3}-[0-9]{7} required"
          placeholder="0987652021"
        />
      </div>
      {/* NOTE Date */}
      <label
        for="input-License plate"
        className="block mb-2 text-sm font-medium text-gray-900 red"
      >
        {t("home.bookingDate_for_booking")}
      </label>
      {/* NOTE Date */}
      <div className="relative mb-6">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiFillCar className="h-5 w-5 absolute dark:text-white" />
        </div>
        <select
          id="countries"
          className="mb-6 pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          onChange={(e) => dispatch(setDate(e.target.value))}
          value={db.date}
        >
          {getDateAvailable(7).map((date) => (
            <option value={date.date} selected>
              {date.name + ' ' + date.date}
            </option>
          ))}
        </select>
      </div>

      {/* NOTE Time */}
      <label
        for="input-License plate"
        className="block mb-2 text-sm font-medium text-gray-900 red"
      >
        {t("home.bookingTime_for_booking")}
      </label>
      {/* NOTE Date */}
      <div className="relative mb-6">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiFillCar className="h-5 w-5 absolute dark:text-white" />
        </div>
        <select
          id="countries"
          className="mb-6 pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          onChange={(e) => dispatch(setTime(e.target.value))}
          value={db.time}
        >
          {timeAvailable.map((time) => (
            <option value={time} selected>
              {time + t("home.Time_for_booking")}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default UserStep;
