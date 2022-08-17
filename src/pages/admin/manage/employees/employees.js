import React from 'react';

function Employees() {
  const Employee_info = ['Nickname'
  ,'Register Status'
  ,'Phone Number'
  ,'User ID'
  ,'Permission'
  ,'Last time Active'

  ,'Salary Amount'
  ,'Salary Type'
  ,'First name'
  ,'Last name'
  ,'District'
  ,'Sub District'
  ,'Address'
  ,'Province'
  ,'Postcode'
  ,'Bank number'
  ,'Bank Account name'
  ,'Bank name'
  ,'Work Background'
  ,'Graduate Certificate'
  ,'action'];


  const data_Employees = [
    ['มุเม','Already','1111111111','u11','Not Access','10 days ago','5000','alway','บุษบา','อารยะธรรม','Unknow','Unknow','Unknow','CNX','12345','987654','บุษบา อารยะธรรม','KTB','Unknown','Unknown','Edit']
    ,['กิ่ง','Not Already','1111111112','u12','Access','1 days ago','7000','alway','ไมยรา','กิ่งก้าน','Unknow','Unknow','Unknow','CNX','12346','987653','ไมยรา กิ่งก้าน','SCB','Unknown','Unknown','Edit']
    ,['หมูสับ','Not Already','1111111113','u13','Not Access','1 days ago','10000','alway','อุรา','หม่าล่า','Unknow','Unknow','Unknow','CNX','12347','987652','อุรา หม่าล่า','SCB','Unknown','Unknown','Edit']
    ,['ไข่มุก','Already','1111111114','u14','Not Access','1 hours ago','8000','alway','สรสุข','มุกใส่เเก้ว','Unknow','Unknow','Unknow','CNX','12348','987651','สรสุข มุกใส่เเก้ว','KTC','Unknown','Unknown','Edit']
    ,['เท่ห์','Already','1111111115','u15','Access','5 hours ago','6000','alway','องอาจ','มาดเท่','Unknow','Unknow','Unknow','CNX','12349','987650','องอาจ มาดเท่','SCB','Unknown','Unknown','Edit']
    ,['ดอกไม้','Not Already','1111111116','u16','Access','1 days ago','9000','alway','เกสร','ซ่อนกลิ่น','Unknow','Unknow','Unknow','CNX','12350','987649','เกสร ซ่อนกลิ่น','KTB','Unknown','Unknown','Edit']
  ]
  return (
    <div class="overflow-x-auto relative shadow-md ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {Employee_info.map((item, index) => (
              <th key={index} scope="col" class="py-3 px-6">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data_Employees.map((item, index) => (
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

export default Employees;
