import React from 'react';
import Datepicker from 'flowbite-datepicker/Datepicker';

function Carousel() {
  const [index, setIndex] = React.useState(0);

  return (
    <div class="flex items-center justify-center">
      <div
        class="datepicker relative form-floating mb-3 xl:w-96"
        data-mdb-toggle-button="false"
      >
        <input
          type="text"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Select a date"
        />
        <label for="floatingInput" class="text-gray-700">
          Select a date
        </label>
        <button class="datepicker-toggle-button" data-mdb-toggle="datepicker">
          <i class="fas fa-calendar datepicker-toggle-icon"></i>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
