import React from "react";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { RiCarWashingFill } from "react-icons/ri";

import Calendar from "./Calendar";
import YingCenterBox from "./yingBooking/YingCenter";
import YingLeftBox from "./yingBooking/YingLeftBox";
import YingRightBox from "./yingBooking/YingRightBox";

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
      <YingCenterBox />
      {/* NOTE จุดสิ้นสุดในส่วนของ LeftBox */}
      <YingLeftBox />
      {/* NOTE จุดเริ่มต้นในส่วนของ rightBox */}
      <div name="rightBox" className="flex">
        <YingRightBox />
      </div>

      <Calendar />
      <NatRightBox />
    </>
  );
}

export default Booking;
