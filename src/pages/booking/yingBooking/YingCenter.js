import React from "react";

function YingCenter() {
  return (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YingCenter;
