import React from "react";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { RiCarWashingFill } from "react-icons/ri";

import NatInput from "./NatInput";
import Calendar from "./Calendar";
import TimeSelect from "./TimeSelect";
import YingCenterBox from "./yingBooking/YingCenter";
import YingLeftBox from "./yingBooking/YingLeftBox";
import YingRightBox from "./yingBooking/YingRightBox";



function Booking() {

  return (
    <>
      {/* NOTE จุดสิ้นสุดในส่วนของ CenterBox */}
      <YingCenterBox />
      {/* NOTE จุดสิ้นสุดในส่วนของ LeftBox */}
      <YingLeftBox />
      {/* NOTE จุดเริ่มต้นในส่วนของ rightBox */}
      <div name="rightBox" className="flex">
        <YingRightBox />
      </div>

      <Calendar />
      <TimeSelect />
      <NatInput />
    </>
  );
}

export default Booking;
