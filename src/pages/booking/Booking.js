import React from 'react';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RiCarWashingFill } from 'react-icons/ri';

import Calendar from '../../components/Calendar';

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
      {/* NOTE เริ่มในส่วนของเจ๊หญิง */}
      <div id="service" className=" bg-gray-200">
        <div className="flex">
          {/* NOTE จุดเริ่มต้นในส่วนของ leftBox */}
          <div name="leftBox" className=" w-2/4">
            <div className="container px-4 mx-auto max-w-5xl">
              <div className="text-center py-14">
                <h1 className="text-5xl font-bold font-title text-sec text-pink-800">
                  Car Booking
                  <br />
                  <span className=" text-pri text-black">Service</span>
                </h1>
                <p className=" text-pri max-w-sm mx-auto py-6">
                  Welcome to our car services site.
                  <br />
                  Let's book the service you are interested!
                </p>

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
                  <div className="">
                    <button
                      href="#"
                      type="reset"
                      className=" inline-block mx-2 my-5 px-5 py-3 rounded-full shadow-lg
                                bg-pink-800 text-sm text-white uppercase tracking-wider
                                  font-semibold "
                    >
                      edit
                    </button>

                    <button
                      href="#"
                      type="submit"
                      className=" inline-block mx-2 my-5 px-5 py-3 rounded-full shadow-lg
                                bg-pink-800 text-sm text-white uppercase tracking-wider
                                font-semibold "
                    >
                      save
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* <p>Car Service Booking</p>
            <div id="carSlide">carSlide</div>

            <form action="" class="w-full max-w-md ml-5">
              <div className="relative flex items-center text-black focus-within:text-red-500 mb-2">
                <BsFillPersonFill class="w-5 h-5 absolute ml-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="name"
                  className=" pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-3"
                />
              </div>

              <div className="relative flex items-center text-black focus-within:text-red-500 mb-2">
                <BsFillTelephoneFill class="w-5 h-5 absolute ml-3 pointer-events-none" />
                <input
                  type="tel"
                  placeholder="tel"
                  className=" pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-3"
                />
              </div>
            </form> */}
          </div>
          {/* NOTE จุดสิ้นสุดในส่วนของ leftBox */}

          {/* NOTE จุดเริ่มต้นในส่วนของ rightBox */}
          <div name="rightBox" className="w-2/4">
            {/* แบบ 1 */}
            {/* <div
              id="serviceCard"
              className="w-40 bg-red-500 rounded-lg overflow-hidden shadow-2xl mb-10"
            >
              <img
                className="h-32 w-ful object-cover object-center"
                src="/carwash.jpg"
              ></img>
              <div className="p-3">
                <div className="flex items-baseline">
                  <span className="inline-block bg-teal-400 text-black text- text-xs px-2 rounded-full font-semibold tracking-wide">
                    service
                  </span>
                  <div className="ml-2 text-sm px-2 text-white font-semibold tracking-wide">
                    Washing
                  </div>
                </div>

                <div className="mx-10 text-center text-white">
                  full car wash service
                  <span className="text-white text-sm"> ฿ </span>
                </div>
                <div className="mt-1 place-content-center flex item-center">
                  <button
                    className=" rounded-xl p-1 mx-10 bg-white text-black text-center relative items-center focus-within:text-white focus-within:bg-teal-500 font-mono grid "
                    type="submit"
                  >
                    select
                  </button>
                </div>
              </div>
            </div> */}
            {/* จบแบบ 1 */}

            {/* แบบ 2 */}
            <div className=" bg-rose-300 my-14 w-56 h-96 rounded-3xl overflow-hidden mb-10 shadow-black shadow-2xl">
              <img
                className="rounded-lg shadow-2xl h-40 w-full object-cover object-center"
                src="/carwash.jpg"
              ></img>
              <h1 class=" pl-5 pr-5 py-3 text-2xl text-center font-bold text-gray-900 leading-tight">
                Dynamic Wash
                <span className=" text-pink-800"> Package</span>
              </h1>
              <p class=" pl-5 pr-5 text-gray-600 text-xs text-center ">
                <div>
                  Wash, Grout, Remove stains on body surfaces and wheel arches,
                  etc. Let us take care of your car efficiently.
                </div>
              </p>
              <div class=" place-content-center flex item-center">
                <button
                  href="#"
                  className="inline-block my-3 px-5 py-3 rounded-full shadow-lg bg-pink-800 text-sm text-white uppercase tracking-wider font-semibold "
                >
                  Click to Booking
                </button>
              </div>
            </div>
            {/* จบแบบ 2 */}
            {/* NOTE จุดสิ้นสุดในส่วนของ rightBox */}
          </div>
        </div>
      </div>
      {/* NOTE ข้างบนเป็นส่วนของเจ๊หญิง */}

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
