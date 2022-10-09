import React from 'react';
import NatInput from './NatInput';

function TimeSelect() {
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
  const dayweek = ['Sun', 'Mon', 'Tue', 'Wed'];

  return (
    <div className="">
      <div className="flex items-center">
        {/* SECTION LeftBox Select Date and Time*/}
        <div id="LeftBox" className="flex items-center basis-2/3 ml-20">
          {/* SECTION Select Day*/}
          {/* TODO Calendar*/}
          <div id="dayweek" className="flex flex-row justify-start rounded-md ">
            {dayweek.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="text-gray-700 rounded-lg text-center bg-gray-300 px-6 py-4 m-6"
                >
                  <p className="text-gray-900 group-hover:text-p urple-900 text-sm transition-all	duration-300 bg-white p-5 mb-3 rounded-md">
                    {item}
                  </p>

                  {/* SECTION Select Time*/}
                  <div id="timeSelecter" className="grid grid-row-7 gap-2">
                    {data.map((item, idx) => {
                      return (
                        <button
                          key={idx}
                          className=" bg-red-400 w-20 rounded-xl p-2 mb-2 text-center hover:bg-gray-500"
                        >
                          <p className=" text-sm text-white font-semibold">
                            {item}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*NOTE RightBox Enter Name,Tel */}
        <div id="RightBox" class="mr-10">
          <NatInput />
        </div>
      </div>
    </div>
  );
}

export default TimeSelect;
