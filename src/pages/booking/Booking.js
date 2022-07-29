import React from "react";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { RiCarWashingFill } from "react-icons/ri";

import Calendar from "./Calendar";
import YingCenter1 from "./yingBooking/YingCenter1";
import YingCenter2 from "./yingBooking/YingCenter2";
import YingCenter3 from "./yingBooking/YingCenter3";

import NatRightBox from "./NatRightBox";

function Booking() {
  const data = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "13:00 PM",
    "14:00 PM",
    "15:00 PM",
    "16:00 PM",
    "17:00 PM",
  ];

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
      <NatRightBox />
    </>
  );
}

export default Booking;
