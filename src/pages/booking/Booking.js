import React from 'react';


import Calendar from './Calendar';
import YingCenterBox from './yingBooking/YingCenter';
import YingLeftBox from './yingBooking/YingLeftBox';
import YingRightBox from './yingBooking/YingRightBox';
import NatRightBox from './NatRightBox';

function Booking() {


  return (
    <>
      {/* NOTE จุดสิ้นสุดในส่วนของ CenterBox */}
      <YingCenterBox />
      {/* NOTE จุดสิ้นสุดในส่วนของ LeftBox */}
      <YingLeftBox />
      {/* NOTE จุดเริ่มต้นในส่วนของ rightBox */}
      <YingRightBox />

      <Calendar />
      <NatRightBox />
    </>
  );
}

export default Booking;
