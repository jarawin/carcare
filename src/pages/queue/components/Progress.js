import React from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
  selectOrder,
  nextStatus,
  prevStatus,
  resetStatus,
  cancelStatus,
  setShowCommission,
  setShowSetting,
  setShowBooking,
  setShowArrived,
  setShowCode,
  setServiceDone,
} from '../../../redux/slices/orderSlice';

// icon
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsStopwatch } from 'react-icons/bs';
import CorrectFill from './svg/CorrectFill';
import CorrectOutline from './svg/CorrectOutline';

// data
import statusList from '../../../data/statusList';
import carTypes from '../../../data/carTypeCss';
import carColors from '../../../data/carColorCss';
import { useTranslation } from 'react-i18next';

const handleStatus = (status) => {
  const status_index = statusList.findIndex((item) => item.name === status);
  return (
    statusList[status_index].text_color +
    ' ' +
    statusList[status_index].color +
    ' '
  );
};

const handleProgress = (status) => {
  const status_index = statusList.findIndex((item) => item.name === status);
  return (
    statusList[status_index].progress +
    ' ' +
    statusList[status_index].progressColor +
    ' '
  );
};

const fillZero = (num) => {
  return num < 10 ? '0' + num : num;
};

const handleCarIcon = (type, color) => {
  const type_index = carTypes.findIndex((item) => item.name === type);
  const color_index = carColors.findIndex((item) => item.name === color);

  return (
    <div className={carColors[color_index].color}>
      {carTypes[type_index].icon}
    </div>
  );
};

const handleCarBgColor = (color) => {
  const color_index = carColors.findIndex((item) => item.name === color);
  return carColors[color_index].bg;
};

function Progress() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrder);
  const {t} = useTranslation();

  const choiceSetting = [
    {
      name: 'Cancel',
      func: (oIdx) => dispatch(cancelStatus({ oIdx })),
    },
    {
      name: 'Reset',
      func: (oIdx) => dispatch(resetStatus({ oIdx })),
    },
  ];

  if (orders.length > 0) {
    return orders?.map((item, oIdx) => {
      return (
        <div className="mb-4" key={item.order_id}>
          <div className=" shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                {/* NOTE Car detail */}
                <button
                  className={
                    handleCarBgColor(item.color_car) +
                    ' rounded-xl relative p-2 cursor-pointer'
                  }
                  onClick={() =>
                    dispatch(setShowSetting({ oIdx, isShow: true }))
                  }
                  onBlur={() =>
                    setTimeout(() => {
                      dispatch(setShowSetting({ oIdx, isShow: false }));
                    }, 100)
                  }
                >
                  {handleCarIcon(item.type_car, item.color_car)}
                </button>
                {/* NOTE Popup Setting */}
                <div className="relative">
                  <div
                    id="dropdownDots"
                    className={
                      (item.showSetting ? '' : 'hidden') +
                      ' absolute  z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
                    }
                  >
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                      {choiceSetting.map((item, idx) => {
                        return (
                          <li key={idx}>
                            <a
                              onClick={(e) => item.func(oIdx)}
                              className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              {item.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-md text-black dark:text-white ml-2">
                    {item.license_car}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-white ml-2">
                    {t("home."+item.type_car)}
                  </span>
                </div>
              </div>

              {/* NOTE User Info */}
              <div className="flex items-center">
                <span className=" flex items-center font-semibold text-xs ">
                  <span className="text-gray-500 mr-1 text-right">
                    {item.nickname} <br />
                    <span className="text-xs">{item.tel}</span>
                  </span>
                  {item?.isMakeCommission ? (
                    <div className="flex -space-x-4">
                      <a
                        href={'/profile?id=' + item.customer_id}
                        className="z-20"
                      >
                        <img
                          className="  w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                          src={item.customer_img}
                          alt=""
                        />
                      </a>
                      <a
                        href={'/profile?id=' + item.employee_id}
                        className="z-10"
                      >
                        <img
                          className="  w-10 h-10  rounded-full border-2 border-white dark:border-gray-800"
                          src={item.employee_img}
                          alt=""
                        />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={'/profile?id=' + item.customer_id}
                      className="z-20"
                    >
                      <img
                        className="  w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                        src={item.customer_img}
                        alt=""
                      />
                    </a>
                  )}
                </span>
              </div>
            </div>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            {/* NOTE Task info */}
            <ul>
              {item.services.map((service, sIdx) => {
                return (
                  <li
                    key={sIdx}
                    className={
                      (service.is_done
                        ? 'text-gray-400 dark:border-gray-800'
                        : 'text-gray-600 dark:text-gray-200 ') +
                      ' flex items-center  justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800'
                    }
                  >
                    <div className="flex items-center justify-start text-sm">
                      <span className="mx-4">{fillZero(sIdx + 1)}</span>
                      <span className={service.is_done ? 'line-through' : ''}>
                        {service.service_name}
                      </span>

                      <span className="mx-4 flex items-center text-gray-400 dark:text-gray-300">
                        {service.service_time}
                        <BsStopwatch className="ml-1" />
                      </span>
                    </div>
                    <div
                      onClick={() =>
                        dispatch(
                          setServiceDone({
                            sIdx,
                            oIdx,
                            isDone: !service.is_done,
                          })
                        )
                      }
                    >
                      {service.is_done ? <CorrectFill /> : <CorrectOutline />}
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* NOTE Comment */}
            <div>
              <p className=" wrapper text-xs text-gray-400 text-center">
                {item?.comment ?? ' '}
                <span className="text-gray-500">
                  {' >> ' + item.order_type + ' Type <<'}
                </span>
              </p>
            </div>

            {/* NOTE Others Info */}
            <div className="flex items-center justify-start my-4 space-x-4">
              {item.booking_time ? (
                item.showBooking ? (
                  <span
                    onClick={() =>
                      dispatch(setShowBooking({ oIdx, isShow: false }))
                    }
                    className="px-2 py-1 flex items-center cursor-pointer text-xs rounded-md font-semibold text-pink-500 bg-pink-50 "
                  >
                    {item.booking_time}
                  </span>
                ) : (
                  <span
                    onClick={() =>
                      dispatch(setShowBooking({ oIdx, isShow: true }))
                    }
                    className="px-2 py-1 flex items-center cursor-pointer font-semibold text-xs rounded-md text-pink-400 border border-pink-400  bg-white"
                  >
                    {t("home.bookingQueue")}
                  </span>
                )
              ) : null}
              {item.arrived_time ? (
                item.showArrived ? (
                  <span
                    onClick={() =>
                      dispatch(setShowArrived({ oIdx, isShow: false }))
                    }
                    className="px-2 py-1 flex items-center cursor-pointer text-xs rounded-md font-semibold text-orange-500 bg-orange-50"
                  >
                    {item.arrived_time}
                  </span>
                ) : (
                  <span
                    onClick={() =>
                      dispatch(setShowArrived({ oIdx, isShow: true }))
                    }
                    className="px-2 py-1 flex items-center cursor-pointer font-semibold text-xs rounded-md text-orange-400 border border-orange-400  bg-white"
                  >
                    {t("home.arrive")}
                  </span>
                )
              ) : null}
              {item.code ? (
                item.showCode ? (
                  <span
                    onClick={() =>
                      dispatch(setShowCode({ oIdx, isShow: false }))
                    }
                    className="px-2 py-1 flex items-center cursor-pointer text-xs rounded-md font-semibold text-lime-500 bg-lime-50"
                  >
                    {item.code}
                  </span>
                ) : (
                  <span
                    onClick={() =>
                      dispatch(setShowCode({ oIdx, isShow: true }))
                    }
                    className="px-2 py-1 flex items-center cursor-pointer font-semibold text-xs rounded-md text-lime-400 border border-lime-400  bg-white"
                  >
                    {t("home.discount")}
                  </span>
                )
              ) : null}

              {item.commission ? (
                item.showCommission ? (
                  <span
                    onClick={() =>
                      dispatch(setShowCommission({ oIdx, isShow: false }))
                    }
                    className="px-2 py-1 flex items-center cursor-pointer text-xs rounded-md font-semibold text-cyan-500 bg-cyan-50 "
                  >
                    {'+ ' + item.commission + '฿'}
                  </span>
                ) : (
                  <span
                    onClick={() =>
                      dispatch(setShowCommission({ oIdx, isShow: true }))
                    }
                    className="px-2 py-1 flex items-center cursor-pointer font-semibold text-xs rounded-md text-cyan-400 border border-cyan-400  bg-white"
                  >
                    {t("home.promotion_Step")}
                  </span>
                )
              ) : null}
            </div>

            {/* NOTE Progress Bar */}
            <div className="block m-auto mb-3">
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div
                  className={
                    handleProgress(item.order_status) +
                    ' h-full text-center text-xs text-white  rounded-full '
                  }
                ></div>
              </div>
            </div>

            {/* NOTE Progress Step */}
            <div className="flex items-left justify-left mb-2 space-x-2 overflow-hidden items-center justify-between">
              <span
                className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200 cursor-pointer hover:bg-gray-400 hover:text-white"
                onClick={(e) =>
                  dispatch(prevStatus({ oIdx, status: item.order_status }))
                }
              >
                <IoIosArrowBack /> {t("home.back_button")} 
              </span>
              <span
                className={
                  handleStatus(item.order_status) +
                  'px-2 py-1 flex items-center font-semibold text-xs rounded-md '
                }
              >
                {item.order_status}
              </span>
              <span
                className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200 cursor-pointer hover:bg-gray-400 hover:text-white"
                onClick={(e) =>
                  dispatch(nextStatus({ oIdx, status: item.order_status }))
                }
              >
                {t("home.next_button")} <IoIosArrowForward />
              </span>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Progress;
