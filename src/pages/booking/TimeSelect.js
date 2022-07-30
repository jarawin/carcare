import React from 'react';

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
  const dayweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="">
      <h1 class="text-left text-3xl font-mono font-bold text-red-600">Select Date and Time</h1>
      {/*NOTE Select Day*/}
      {/*TODO Calendar*/}
      <div
        id="dayweek"
        className="flex flex-row justify-center rounded-md">
        {dayweek.map((item, idx) => {
          return (
            <div
              key={idx}
              className="text-gray-700 rounded-lg text-center bg-gray-300 px-6 py-4 m-6">
              <p className="text-gray-900 group-hover:text-p urple-900 text-sm transition-all	duration-300 ">
                {item}
              </p>

              {/*NOTE Select Time*/}
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
  );
}

export default TimeSelect;
