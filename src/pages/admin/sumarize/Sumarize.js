import React from 'react';

function Sumarize() {
  return (
    <div className="mt-2 mx-auto px-10">
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Service
              </th>
              <th scope="col" class="py-3 px-6">
                amount
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Car Coating
              </th>
              <td class="py-4 px-6">1</td>
              <td class="py-4 px-6">$1999</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Car Washing
              </th>
              <td class="py-4 px-6">18</td>
              <td class="py-4 px-6">$9999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sumarize;
