import React from "react";

function Promotions() {
  const promotions = [
    "promotion_id",
    "service_id",
    "image",
    "type_of_car",
    "description",
    "code",
    "time_start",
    "time_stop",
    "limit_type",
    "limit_amount",
    "discount_type",
    "discount_baht",
    "is_public",
    "action",
  ];
  const promotion_data = [
    [
      "promotion_id_1",
      "service_id_1",
      "image1",
      "truck",
      "details",
      "aabbcc",
      "9.30",
      "16.00",
      "DAILY",
      "2",
      "percent OR baht",
      "200-",
      "true",
      "edit",
    ],
  ];
  const promotion_info = [];

  const data = [
    ["ja1", "0911700623"],
    ["ja2", "0987652021"],
  ];

  return (
    <div class="overflow-x-auto relative shadow-md ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {promotions.map((item, index) => (
              <th key={index} scope="col" class="py-3 px-6">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {promotion_data.map((item, index) => (
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

export default Promotions;
