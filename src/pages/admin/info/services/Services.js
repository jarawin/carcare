import React, { useState } from 'react';
import classNames from '../../../../utils/classNames';
function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [tableName, setTableName] = useState('packages');
  const tableNames = ['microservices', 'packages', 'mixpackages'];
  const handleTable = (e) => {
    setIsOpen(false);
    setTableName(e.target.name);
  };

  const packages = [
    'description',
    'timestamp',
    'name',
    'ms_id',
    'p_id',
    'image',
  ];
  const data_package = [['10', '20.00', 'who', 'm01', 'p01', 'img']];

  const micro_service = [
    'car_type',
    'image',
    'description',
    'ms_id',
    'name',
    'timestamp',
    'price',
  ];
  const data_micro_service = [
    ['SUV', 'img', '10', 'm01', 'who', '19.00', '200 bath'],
  ];

  const mix_package = [
    'p_id',
    'name',
    'mp_id',
    'description',
    'timestamp',
    'image',
  ];
  const data_mix_package = [['p01', 'who', 'm01', '10', '20.00', 'img']];

  return (
    <div>
      <div
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Select Table
        <svg
          class="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      <div
        id="dropdown"
        class={classNames(
          isOpen ? '' : 'hidden',
          'absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700'
        )}
      >
        <ul
          class="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {tableNames.map((tableName, index) => (
            <li key={index}>
              <a
                onClick={handleTable}
                name={tableName}
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {tableName}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div class="overflow-x-auto relative shadow-md ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableName == 'packages'
                ? packages.map((item, index) => (
                    <th key={index} scope="col" class="py-3 px-6">
                      {item}
                    </th>
                  ))
                : tableName == 'microservices'
                ? micro_service.map((item, index) => (
                    <th key={index} scope="col" class="py-3 px-6">
                      {item}
                    </th>
                  ))
                : mix_package.map((item, index) => (
                    <th key={index} scope="col" class="py-3 px-6">
                      {item}
                    </th>
                  ))}
            </tr>
          </thead>

          <tbody>
            {tableName == 'packages'
              ? data_package.map((item, index) => (
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
                ))
              : tableName == 'microservices'
              ? data_micro_service.map((item, index) => (
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
                ))
              : data_mix_package.map((item, index) => (
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
    </div>
  );
}
export default Services;
