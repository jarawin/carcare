import React from "react";

function YingRightBox() {
  const dataCard = [
    {
      title: "t1",
      subtitle: "st1",
      detail: "d1",
      image: "/carwash.jpg",
    },
    {
      title: "t2",
      subtitle: "st2",
      detail: "d2",
      image: "/carwash.jpg",
    },
    {
      title: "t2",
      subtitle: "st2",
      detail: "d2",
      image: "/carwash.jpg",
    },
    {
      title: "t2",
      subtitle: "st2",
      detail: "d2",
      image: "/carwash.jpg",
    },
  ];
  return dataCard.map((item, idx) => {
    return (
      <div
        key={idx}
        className="mx-auto bg-red-200 my-14 w-56 h-96 rounded-3xl overflow-hidden mb-10 shadow-black shadow-2xl"
      >
        <img
          className="rounded-lg shadow-2xl h-40 w-full object-cover object-center"
          src={item.image}
        ></img>
        <h1 class=" pl-5 pr-5 py-3 text-2xl text-center font-bold text-red-800 leading-tight">
          {item.title}
          <span className=" text-gray-800">{item.subtitle}</span>
        </h1>
        <p class=" pl-5 pr-5 text-black text-xs text-center ">
          <div>{item.detail}</div>
        </p>
        <div class=" place-content-center flex item-center">
          <button
            href="#"
            className="inline-block my-3 px-5 py-3 rounded-full shadow-lg
                bg-black text-sm text-white uppercase tracking-wider font-semibold 
                focus-within:text-white focus-within:bg-red-800 "
          >
            Click to Booking
          </button>
        </div>
      </div>
    );
  });
}

export default YingRightBox;
