import React from "react";

function YingRightBox() {
  return (
    <div name="rightBox" className="w-2/4">
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
            Wash, Grout, Remove stains on body surfaces and wheel arches, etc.
            Let us take care of your car efficiently.
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
  );
}

export default YingRightBox;
