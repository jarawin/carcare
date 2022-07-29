import React from "react";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { RiCarWashingFill } from "react-icons/ri";

import NatInput from "./NatInput";
import Calendar from "./Calendar";
import YingCenter1 from "./yingBooking/YingCenter1";
import YingCenter2 from "./yingBooking/YingCenter2";
import YingCenter3 from "./yingBooking/YingCenter3";

import NatRightBox from "./NatRightBox";



function Booking() {

  return (
    <>
      {/* NOTE จุดสิ้นสุดในส่วนของ CenterBox */}
      <YingCenter1 />
      {/* NOTE จุดสิ้นสุดในส่วนของ LeftBox */}
      <YingCenter2 />
      {/* NOTE จุดเริ่มต้นในส่วนของ rightBox */}
      <div name="rightBox" className="flex  bg-gray-200">
        <YingCenter3 />
      </div>

      <Calendar />
      <TimeSelect />
      <NatInput />
    </>
  );
}

export default Booking;
