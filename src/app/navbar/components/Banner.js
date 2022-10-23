// import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import { HiXMark, HiOutlineMegaphone } from 'react-icons/hi';
// import { HiXMark, HiOutlineMegaphone } from 'react-icons/hi';
import React, { useState } from 'react';
import classNames from '../../../utils/classNames';

import { GoMegaphone } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';

export default function Example() {
  const [show, setShow] = useState(
    JSON.parse(localStorage.getItem('dismissedBanner')) ?? true
  );

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem('dismissedBanner', 'false');
  };

  const handleClickPromotion = () => {
    setShow(false);
    localStorage.setItem('dismissedBanner', 'false');
    window.location.href = '/booking?code=WEDNY10';
  };

  return (
    <div className={classNames(show ? '' : 'hidden', ' bg-yellow-500')}>
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-yellow-800 p-2">
              <GoMegaphone className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">ลด 10% ทุกรายการเฉพาะวันพุธ</span>
              <span className="hidden md:inline">
                โปรโมชั่นลด 10% ทุกรายการ เมื่อใช้โค้ดลดราคา{' '}
                <span className=" font-bold ">WEDNY10</span> เฉพาะวันพุธ
                เท่านั้น รีบใช้ก่อนหมดเวลา วันนี้เท่านั้น
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              onClick={handleClickPromotion}
              className=" cursor-pointer flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-yellow-600 shadow-sm hover:bg-indigo-50"
            >
              ใช้โปรโมชั่นตอนนี้
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={handleDismiss}
            >
              <AiOutlineClose
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
