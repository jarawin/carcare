import React from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RiCarWashingFill } from 'react-icons/ri';

import Calendar from './Calendar';
import YingCenterBox from './yingBooking/YingCenter';
import YingLeftBox from './yingBooking/YingLeftBox';
import YingRightBox from './yingBooking/YingRightBox';

function Booking() {
  const data = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '13:00 PM',
    '14:00 PM',
    '15:00 PM',
    '16:00 PM',
    '17:00 PM',
  ];

  return (
    <>
      {/* NOTE จุดสิ้นสุดในส่วนของ CenterBox */}
      <YingCenterBox />
      {/* NOTE จุดสิ้นสุดในส่วนของ LeftBox */}
      <YingLeftBox />
      {/* NOTE จุดเริ่มต้นในส่วนของ rightBox */}
      <YingRightBox />

      {/* TODO ไอค่อนมันไม่ยอมอยู่ที่เดิมครับเวลาเปลี่ยนหน้าจอจากโน้ตบุ๊คไปไอแพด help me please */}
      <form action="" class="">
        <div className=" bg-our-bg px-8 py-2 text-black focus-within:text-pink-800 mb-1">
          <BsFillPersonFill class="w-5 h-5 absolute ml-44 mt-2.5 pointer-events-none" />
          <input
            type="text"
            placeholder="name"
            className=" pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required"
          />
        </div>

        <div className=" bg-our-bg px-8 py-2 text-black focus-within:text-pink-800 mb-2">
          <BsFillTelephoneFill class="w-5 h-5 absolute ml-44 mt-2.5 pointer-events-none" />
          <input
            type="tel"
            placeholder="tel"
            className=" pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required"
          />
        </div>
      </form>

      {/*NOTE CALENDAR */}
      <div id="datetime" className=" bg-gray-200 flex flex-row">
        <div id="leftBox" className=" basis-1/2">
          <h1 className="text-2xl ">Select date and time</h1>
          <Calendar />
        </div>

        {/* NOTE RIGHT BAR */}
        <div id="rightBox">
          <div id="timeSelecter" className="grid grid-cols-3 gap-2 mt-2">
            {/* TODO map this compo for me */}
            {data.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className=" bg-pink-800 w-20 rounded-xl p-2 text-center hover:bg-gray-500"
                >
                  <p className=" text-sm text-white font-semibold">{item}</p>
                </button>
              );
            })}
          </div>
          <div id="boxComment">
            <p>Comment</p>
            <textarea
              placeholder="comment"
              className="rounded-md h-20 w-52 pl-2"
            />
          </div>

          <div id="button" className="grid grid-cols-2 gap-2 text-white">
            <button className="bg-gray-500 rounded-lg px-4 py-2">Cancel</button>
            <button className="bg-green-600 rounded-lg px-4 py-2">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
