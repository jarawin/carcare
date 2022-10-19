import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  setTypeCar,
  setLicenseCar,
  setColorCar,
  selectDataBooking,
} from '../../../redux/slices/bookingSlice';
import { useSelector, useDispatch } from 'react-redux';

import { AiFillCar } from 'react-icons/ai';

import carColors from '../../../data/carColors';
import carTypes from '../../../data/carTypes';

function CarStep() {
  const dispatch = useDispatch();
  const db = useSelector(selectDataBooking);
  const { t } = useTranslation();

  return (
    <>
      {/*NOTE Enter License plate */}
      <label
        for="input-License plate"
        className="block mb-2 text-sm font-medium text-gray-900 red"
      >
        ชนิดของรถ
      </label>
      <div className="relative mb-6">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiFillCar className="h-5 w-5 absolute dark:text-white" />
        </div>
        <select
          id="countries"
          className="mb-6 pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          onChange={(e) => dispatch(setTypeCar(e.target.value))}
          value={db.type_car}
        >
          {carTypes.map((i) => (
            <option value={i.type_of_car}>{t("home."+i.type_of_car)}</option>
          ))}
        </select>
      </div>
      {/* NOTE Color car */}
      <label
        for="input-License plate"
        className="block mb-2 text-sm font-medium text-gray-900 red"
      >
        สีของรถ
      </label>
      <div className="relative mb-6">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiFillCar className="h-5 w-5 absolute dark:text-white" />
        </div>
        <select
          id="countries"
          className="mb-6 pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          onChange={(e) => dispatch(setColorCar(e.target.value))}
          value={db.color_car}
        >
          {carColors.map((color) => (
            <option value={color.color} selected>
              {'สี' + color.name}
            </option>
          ))}
        </select>
      </div>

      {/*NOTE Enter License plate */}
      <label
        for="input-License plate"
        className="block mb-2 text-sm font-medium text-gray-900 red"
      >
        {t("home.carLicense")}
      </label>
      <div className="relative mb-6">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiFillCar className="h-5 w-5 absolute dark:text-white" />
        </div>
        <input
          type="text"
          id="input-name"
          value={db.license_car}
          onChange={(e) => dispatch(setLicenseCar(e.target.value))}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 required"
          placeholder="กข 1234 กรุงเทพ"
        />
      </div>
    </>
  );
}

export default CarStep;
