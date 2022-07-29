import React from 'react';

function YingCenter3() {
  const dataCard = [
    {
      title: 'Dynamic Wash ',
      subtitle: 'Package',
      detail:
        'Wash, Grout, Remove stains on body surfaces and wheel arches, etc. Let us take care of your car efficiently.',
      image: '/carwash.jpg',
    },
    {
      title: 'Polishing ',
      subtitle: 'Package',
      detail:
        'Removing minor clear coat damage using a polishing liquid to flatten the clear coat which increases the gloss-level.',
      image: '/carpolish.jpg',
    },
    {
      title: 'Coating ',
      subtitle: 'Package',
      detail:
        'Silica coating for protecting surface to always look shiny. Ceramic coating for durability body and reduce wrinkles.',
      image: '/carcoating.jpg',
    },
    {
      title: 'Clean Interior ',
      subtitle: 'Package',
      detail:
        'Cleaning inner parts of a vehicle with different methods such as vacuuming and steam-cleaning are used.',
      image: '/carinterior.jpg',
    },
  ];

  return dataCard.map((item, idx) => {
    return (
      <div
        key={idx}
        className=" mx-auto bg-red-200 my-14 w-56 h-96 rounded-3xl overflow-hidden mb-10 shadow-black shadow-2xl"
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
                hover:text-white hover:bg-red-800 "
          >
            Click to Booking
          </button>
        </div>
      </div>
    );
  });
}

export default YingCenter3;
