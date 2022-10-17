import React from 'react';
import Carousel from './Carousel';
import DescripServices from './DescripServices';

import './ping.css';
import { useTranslation } from 'react-i18next';
import { GiFlamingArrow } from 'react-icons/gi';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className=" relative">
        <div className=" ">
          <Carousel />
        </div>

        {/* NOTE Text Heading */}
        <div className="text-center m-16 space-y-5">
          <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            ศูนย์ดูแลรถ คุณภาพสูง
          </h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            ให้บริการ 9:00 - 19:00 น. ทุกวัน
            <br />ณ ลานจอดรถชั้นใต้ดิน โลตัสสงขลา
          </p>

          <a
            href="/booking"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
          >
            จองคิวด่วน
            <GiFlamingArrow className="ml-2" />
          </a>
        </div>

        <div>
          <DescripServices />
        </div>
      </div>
    </div>
  );
}
export default Home;
