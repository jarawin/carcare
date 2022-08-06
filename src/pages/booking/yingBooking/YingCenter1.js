import React from "react";

function YingCenter1() {
  return (
    <div id="service" className="">
      <div className=" center ">
        {/* NOTE จุดเริ่มต้นในส่วนของ CenterBox */}
        <div name="CenterBox" className="">
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="text-center py-14">
              <h1 className=" font-itim mt-40 text-7xl font-bold font-title text-sec text-red-600 dark:text-red-500">
                Car Washing
                <br />
                <span className=" text-black dark:text-white text-6xl font-itim ">
                  Online Booking Service
                </span>
              </h1>
              <p className="dark:text-gray-300 text-xl max-w-sm mx-auto py-6">
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

export default YingCenter1;
