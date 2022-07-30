import React, { useState, useEffect } from 'react';
import classNames from '../../../utils/classNames';
import { GrNext, GrPrevious } from 'react-icons/gr';

function YingCenter2() {
  const [imgDisplay, setImgDisplay] = useState(0);
  const images = [
    {
      name: 'IMG 1',
      src: '/1.jpg',
    },
    {
      name: 'IMG 2',
      src: '/2.jpg',
    },
  ];

  const handleClick = (e) => {
    const { name } = e.target;
    if (name === 'next') {
      setImgDisplay((imgDisplay + 1) % images.length);
    } else {
      setImgDisplay((imgDisplay - 1 + images.length) % images.length);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImgDisplay((imgDisplay + 1) % images.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [imgDisplay]);

  return (
    <>
      <div id="animation-carousel" className="relative">
        <div className="overflow-hidden relative h-56 rounded-lg md:h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={classNames(
                imgDisplay === index ? '' : 'hidden',
                ' duration-1000 ease-linear absolute inset-0 transition-all transform'
              )}
            >
              <img
                src={image.src}
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt={image.name}
              />
            </div>
          ))}
        </div>

        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          name="prev"
          onClick={handleClick}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <GrPrevious className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          name="next"
          onClick={handleClick}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <GrNext className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}

export default YingCenter2;
