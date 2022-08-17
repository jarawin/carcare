import React from 'react';

function Services() {
  const packages = ['description,timestamp,name,ms_id,p_id,image'];
  const data_package = ['10','20.00','who','m01','p01','img']
  const micro_service = ['type,image,description,ms_id,name,timestamp,price_truck,price_SUV,price_van,price_MC,price_sedan'];
  const mix_package = ['p_id,name,mp_id,description,timestamp,image'];

  return (
    <div class="overflow-x-auto relative shadow-md ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {packages.map((item, index) => (
              <th key={index} scope="col" class="py-3 px-6">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data_package.map((item, index) => (
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
export default Services;
