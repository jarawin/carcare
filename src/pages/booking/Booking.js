import React from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RiCarWashingFill } from 'react-icons/ri';

import NatInput from './NatInput';
import Calendar from './Calendar';
import YingCenter1 from './yingBooking/YingCenter1';
import YingCenter2 from './yingBooking/YingCenter2';
import YingCenter3 from './yingBooking/YingCenter3';
import TimeSelect from './TimeSelect';

function Booking() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <YingCenter1 />
        <YingCenter2 />
        <YingCenter3 />

        <Calendar />
        <TimeSelect />
        <NatInput />
      </div>
    </div>
  );
}

export default Booking;
