import React from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RiCarWashingFill } from 'react-icons/ri';

import Calendar from './Calendar';
import YingCenter1 from './yingBooking/YingCenter1';
import YingCenter2 from './yingBooking/YingCenter2';
import YingCenter3 from './yingBooking/YingCenter3';
import YingStepper from './yingBooking/YingStepper';
import TimeSelect from './TimeSelect';

function Booking() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <YingCenter1 />
        <YingStepper />
        <YingCenter2 />
        <YingCenter3 />

        <Calendar />
        <TimeSelect />
      </div>
    </div>
  );
}

export default Booking;
