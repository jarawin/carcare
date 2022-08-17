import React from "react";

function Members() {
  const member = [
    "user_id",
    "service_member_id",
    "mix_package_id",
    "start_time",
    "end_time",
    "action",
  ];
  const member_data = [
    ["aa01", "sm005", "t01", "12/04/64", "12/05/64", "Edit"],
    ["aa02", "sm007", "t02", "19/04/64", "19/05/64", "Edit"],
    ["aa03", "sm012", "t02", "21/04/64", "21/05/64", "Edit"],
    ["aa04", "sm023", "t03", "23/04/64", "23/05/64", "Edit"],
    ["aa05", "sm025", "t04", "27/04/64", "27/05/64", "Edit"],
  ];

  return (
    <div class="overflow-x-auto relative shadow-md ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {member.map((item, index) => (
              <th key={index} scope="col" class="py-3 px-6">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {member_data.map((item, index) => (
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

export default Members;
