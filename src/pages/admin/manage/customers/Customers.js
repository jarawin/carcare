import React from 'react';

function Customers() {
  const column = ['Image', 'User id', 'Nickname', 'Phone', 'Email', 'Rank', 'Register id', 'First serve time', 'Lasttime Active', 'Register time', 'is_member', 'is_register', 'Action'];

  const data = [
    ['Image', '#456123', 'Ja', '0987564321', 'jarawin@gmail.com', 'Gold', '#12345', '13/02/64 : 12.00', '13/02/64 : 15.00', '12/04/64 : 15.00', 'True', 'False', 'Edit'],
    ['Image', '#456124', 'Nat', '0987564322', 'natnat@gmail.com', 'Gold', , '#12346', '13/02/64 : 12.00', '13/02/64 : 15.00', '19/04/65 : 15.00', 'True', 'False', 'Edit'],
    ['Image', '#456125', 'Ying', '0987564323', 'yingying@gmail.com', 'Gold', '#12347', '13/02/64 : 12.00', '13/02/64 : 15.00', '20/06/65 : 15.00', 'False', 'False', 'Edit'],
    ['Image', '#456126', 'Peem', '0987564324', 'peempeem@gmail.com', 'Silver', '#12348', '13/02/64 : 12.00', '13/02/64 : 15.00', '25/04/65 : 15.00', 'True', 'False', 'Edit'],
    ['Image', '#456127', 'Film', '0987564325', 'filmfilm@gmail.com', 'Silver', '#12349', '13/02/64 : 12.00', '13/02/64 : 15.00', '20/06/65 : 15.00', 'True', 'False', 'Edit'],
    ['Image', '#456128', 'Nam', '0987564326', 'namnam@gmail.com', 'Bronze', '#12350', '13/02/64 : 12.00', '13/02/64 : 15.00', '12/07/65 : 15.00', 'True', 'False', 'Edit'],
    ['Image', '#456129', 'Somruk', '0987564327', 'somruk@gmail.com', 'Bronze', '#12351', '13/02/64 : 12.00', '13/02/64 : 15.00', '21/07/65 : 15.00', 'True', 'False', 'Edit'],
    ['Image', '#456130', 'But', '0987564328', 'butbut@gmail.com', 'Bronze', '#12352', '13/02/64 : 12.00', '13/02/64 : 15.00', '08/08/65 : 15.00', 'False', 'False', 'Edit'],
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
