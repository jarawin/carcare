import React from 'react';

function Customers() {
  const column = ['Image', 'Nickname', 'Phone', 'User id', 'is_register', 'Permission', 'Lasttime Active', 'Register id', 'Email', 'Register time', 'Rank', 'is_member', 'First serve time', 'Action'];

  const data = [
    ['Image', 'Ja', '0987564321', '#456123', '-', '-', '12.00', '-', 'jarawin@gmail.com', '15.00', 'Gold', 'True', '12/04/64', 'Edit'],
    ['Image', 'Nat', '0987564322', '#456124', '-', '-', '12.00', '-', 'natnat@gmail.com', '15.00', 'Gold', 'True', '19/04/65', 'Edit'],
    ['Image', 'Ying', '0987564323', '#456125', '-', '-', '12.00', '-', 'yingying@gmail.com', '15.00', 'Gold', 'False', '20/06/65', 'Edit'],
    ['Image', 'Peem', '0987564324', '#456126', '-', '-', '12.00', '-', 'peempeem@gmail.com', '15.00', 'Silver', 'True', '25/04/65', 'Edit'],
    ['Image', 'Film', '0987564325', '#456127', '-', '-', '12.00', '-', 'filmfilm@gmail.com', '15.00', 'Silver', 'True', '20/06/65', 'Edit'],
    ['Image', 'Nam', '0987564326', '#456128', '-', '-', '12.00', '-', 'namnam@gmail.com', '15.00', 'Bronze', 'True', '12/07/65', 'Edit'],
    ['Image', 'Somruk', '0987564327', '#456129', '-', '-', '12.00', '-', 'somruk@gmail.com', '15.00', 'Bronze', 'True', '21/07/65', 'Edit'],
    ['Image', 'But', '0987564328', '#456130', '-', '-', '12.00', '-', 'butbut@gmail.com', '15.00', 'Bronze', 'False', '08/08/65', 'Edit'],
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

export default Customers;
