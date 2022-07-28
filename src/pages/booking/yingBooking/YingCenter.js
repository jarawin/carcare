import React from "react";

function YingCenter() {
  return (
    <div id="service" className=" bg-gray-200">
      <div className=" center ">
        {/* NOTE จุดเริ่มต้นในส่วนของ CenterBox */}
        <div name="CenterBox" className="">
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="text-center py-14">
              <h1 className="text-5xl font-bold font-title text-sec text-red-700">
                Car Booking
                <br />
                <span className=" text-pri text-black">Service</span>
              </h1>
              <p className=" text-pri max-w-sm mx-auto py-6">
                Welcome to our car services site.
                <br />
                Let's book the service you are interested!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YingCenter;
