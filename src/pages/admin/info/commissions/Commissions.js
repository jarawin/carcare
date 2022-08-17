import React from 'react';

function Commissions() {
  const column = ['Quota Type', 'Quota Amount', 'Topic', 'Description', 'Commission id', 'Position', 'Baht'];

  const data = [
    ['First 2 cars of the day', '5/Month', 'Wash', 'Washing', '#12345', 'Employee', '50'],
    ['First 2 cars of the months', '10/Month', 'Wash', 'Washing', '#12345', 'Manager', '100'],

  ];

  return (
    <div class="overflow-x-auto relative shadow-md ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {column.map((item, index) => (
              <th key={index} scope="col" class="py-3 px-6">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {item.map((item, index) => (
                <td
                  key={index}
                  class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
                >
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Commissions;
