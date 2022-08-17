import React from 'react';

function Customers() {
  const column = ['Nickname', 'Phone', 'User id', 'Is register', 'Permission', 'Lasttime Active', 'Register id', 'Email', 'Register time', 'Rank', 'is member', 'First serve time', 'Edit/Delete'];

  const data = [
    ['Ja', '0987564321', '#456123', '-', '-', '12.00', '-', 'jarawin@gmail.com', '15.00', 'Gold', 'Member', '12/04/64'],
    ['Nat', '0987564322', '#456124', '-', '-', '12.00', '-', 'jarawin@gmail.com', '15.00', 'Gold', 'Member', '19/04/65'],
    ['Ying', '0987564323', '#456125', '-', '-', '12.00', '-', 'jarawin@gmail.com', '15.00', 'Gold', 'Not Member', '20/06/65'],
    ['Peem', '0987564324', '#456126', '-', '-', '12.00', '-', 'jarawin@gmail.com', '15.00', 'Silver', 'Member', '25/04/65'],
    ['Film', '0987564325', '#456127', '-', '-', '12.00', '-', 'jarawin@gmail.com', '15.00', 'Silver', 'Member', '20/06/65'],
    ['Nam', '0987564326', '#456128', '-', '-', '12.00', '-', 'jarawin@gmail.com', '15.00', 'Bronze', 'Member', '12/07/65'],
    ['Somruk', '0987564327', '#456129', '-', '-', '12.00', '-', 'jarawin@gmail.com', '15.00', 'Bronze', 'Member', '21/07/65'],
    ['Bam', '0987564328', '#456130', '-', '-', '12.00', '-', 'jarawin@gmail.com', '15.00', 'Bronze', 'Not Member', '08/08/65'],
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
