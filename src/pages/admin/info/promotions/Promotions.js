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
      "MC",
      "details",
      "#KSR0123",
      "9.30",
      "16.00",
      "DAILY",
      "2",
      "percent OR baht",
      "200-",
      "TRUE",
      "Edit",
    ],
    [
      "promotion_id_2",
      "service_id_2",
      "image2",
      "SEDAN",
      "details",
      "#KSR0456",
      "9.30",
      "16.00",
      "WEEKLY",
      "2",
      "percent OR baht",
      "500-",
      "TRUE",
      "Edit",
    ],
    [
      "promotion_id_3",
      "service_id_3",
      "image3",
      "truck",
      "details",
      "#KSR0789",
      "9.30",
      "16.00",
      "MONTHLY",
      "2",
      "percent OR baht",
      "639-",
      "FALSE",
      "Edit",
    ],
    [
      "promotion_id_4",
      "service_id_4",
      "image4",
      "SUV",
      "details",
      "#KSR0987",
      "9.30",
      "16.00",
      "YEARLY",
      "2",
      "percent OR baht",
      "899-",
      "TRUE",
      "Edit",
    ],
    [
      "promotion_id_5",
      "service_id_5",
      "image5",
      "VAN",
      "details",
      "#KSR0654",
      "9.30",
      "16.00",
      "HOURLY",
      "2",
      "percent OR baht",
      "129-",
      "FALSE",
      "Edit",
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
