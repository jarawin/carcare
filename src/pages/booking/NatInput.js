import React from 'react';
import { HiPhone, HiUser, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi';
import { AiFillCar, AiOutlineCar } from 'react-icons/ai';
import { GiPriceTag } from 'react-icons/gi';

function NatInput() {
  return (
    <div className="">
      {/*NOTE Enter name */}
      <label
        for="input-name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Your Name
      </label>
      <div class="relative mb-6">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <HiUser className="h-5 w-5 absolute" />
        </div>
        <input
          type="text"
          id="input-name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 required"
          placeholder="Name"
        />
      </div>
      {/*NOTE Enter phone number */}
      <label
        for="input-phone"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Your Phone Number
      </label>
      <div class="relative mb-6">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <HiPhone className="h-5 w-5 absolute" />
        </div>
        <input
          type="tel"
          id="input-phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pattern=[0-9]{3}-[0-9]{7} required"
          placeholder="012-3456789"
        />
      </div>
      {/*NOTE Enter License plate */}
      <label
        for="input-License plate"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Your License Plate
      </label>
      <div class="relative mb-6">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiFillCar className="h-5 w-5 absolute" />
        </div>
        <input
          type="text"
          id="input-name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 required"
          placeholder="XX-1234   bangkok"
        />
      </div>
      {/*NOTE Enter promotion */}
      <label
        for="input-promotion"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Promotion
      </label>
      <div class="relative mb-6">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <GiPriceTag className="h-5 w-5 absolute" />
        </div>
        <input
          type="text"
          id="input-name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 required"
          placeholder="Promotion"
        />
      </div>
      {/*NOTE Enter Comment */}
      <label
        for="comment"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Your Comment
      </label>
      <textarea
        id="comment"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 required"
        placeholder="Comment... "
      ></textarea>

      {/*NOTE Button Booking*/}
      <div id="button" className="flex justify-center py-3 gap-10 text-white">
        <button className="bg-green-500 rounded-lg px-6 py-2 hover:bg-gray-400">
          Booking
        </button>
      </div>
    </div>
  );
}

export default NatInput;
