import React from 'react';
import {
  setCode,
  setComment,
  setIncluded,
  setPromotion,
  selectDataBooking,
  removeIncluded,
  addIncluded,
  updateIncluded,
} from '../../../redux/slices/bookingSlice';
import { useSelector, useDispatch } from 'react-redux';

import { GiPriceTag } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineCheck, AiFillCar } from 'react-icons/ai';

import promotions from '../../../data/mock/promotions';
import services from '../../../data/mock/services';

const lesstext = (text, max) => {
  if (text.length > max) {
    return text.substring(0, max) + '...';
  } else {
    return text;
  }
};

function ServiceStep() {
  const dispatch = useDispatch();
  const db = useSelector(selectDataBooking);
  const [isNotFound, setIsNotFound] = React.useState(false);

  const findPromotion = () => {
    const pm = promotions.find((p) => p.code === db.code.toUpperCase());
    setIsNotFound(!pm);
    dispatch(setPromotion(pm.name));
  };

  React.useEffect(() => {
    if (db.code == '') {
      setIsNotFound(false);
    }
  }, [db]);

  return (
    <>
      {/* NOTE Service */}
      <label
        for="input-License plate"
        className="block mb-2 text-sm font-medium text-gray-900 red relative"
      >
        บริการ
        <button
          className="flex cursor-pointer hover:bg-gray-200 hover:border-gray-200 p-2 ring-2 border-white ring-white hover:ring-gray-200 rounded-md bg-white border-2 absolute inset-y-0 right-2 items-center  dark:bg-red-600 dark:border-red-600 dark:ring-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:hover:ring-red-700"
          onClick={() => {
            dispatch(addIncluded({ service_id: services[0].service_id }));
          }}
        >
          <span className=" text-red-600 dark:text-white">+ เพิ่มบริการ</span>
        </button>
      </label>

      <div
        className={(db.included.length > 1 ? 'mb-2' : 'mb-6') + ' relative '}
      >
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiFillCar className="h-5 w-5 absolute dark:text-white" />
        </div>
        <select
          id="countries"
          className=" pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          onChange={(e) => {
            {
              dispatch(
                setIncluded([...db.included, { service_id: e.target.value }])
              );
            }
          }}
          defaultValue={{ service_id: db.included[0].service_id }}
        >
          {services.map((service) => (
            <option value={service.service_id} selected>
              {service.name + ' ' + service.price_per_typeS[0].price + ' บาท'}
            </option>
          ))}
        </select>
      </div>

      {/* NOTE Service Add */}
      {db.included.length > 1
        ? db.included.map((service, idx) => {
            if (idx > 0) {
              return (
                <div
                  className={
                    (db.included.length - 1 <= idx ? 'mb-6' : 'mb-2') + ' flex '
                  }
                >
                  <div className="relative flex-auto">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <AiFillCar className="h-5 w-5 absolute dark:text-white" />
                    </div>
                    <select
                      className=" pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                      onChange={(e) => {
                        {
                          dispatch(
                            updateIncluded({
                              idx: idx,
                              service_id: e.target.value,
                            })
                          );
                        }
                      }}
                      defaultValue={db.included[idx]}
                    >
                      {services.map((service) => (
                        <option value={service.service_id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="flex cursor-pointer border border-gray-300 hover:bg-gray-200  p-2 rounded-r-lg bg-white  right-3 items-center  dark:bg-gray-900  dark:hover:bg-gray-800  "
                    onClick={() => dispatch(removeIncluded(idx))}
                  >
                    <span className="text-sm px-2  dark:text-white">ลบ</span>
                  </button>
                </div>
              );
            } else {
              return null;
            }
          })
        : null}

      {/*NOTE Enter promotion */}
      <div>
        <label
          for="input-promotion"
          className="block mb-2 text-sm font-medium text-gray-900 red relative"
        >
          โปรโมชั่น
          {isNotFound ? (
            <div className="flex absolute inset-y-0 right-3 items-center pl-3 pointer-events-none">
              <AiOutlineClose className="h-5 w-5 absolute  text-red-600" />
              <span className="ml-5 text-red-600 pt-1">ไม่มีโปรโมชั่น</span>
            </div>
          ) : db.promotion ? (
            <div className="flex absolute inset-y-0 right-3 items-center pl-3 pointer-events-none">
              <AiOutlineCheck className="h-5 w-5 absolute  text-yellow-400" />
              <span className="ml-5 text-yellow-400 pt-1">
                โปรโมชั่นใช้งานได้
              </span>
            </div>
          ) : null}
        </label>
        {/* NOTE Promotion */}
        <div className="relative mb-6">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <GiPriceTag className="h-5 w-5 absolute dark:text-white" />
          </div>

          {db.promotion ? (
            <>
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2  dark:focus:ring-gray-800"
                onClick={() => {
                  dispatch(setPromotion(null));
                  dispatch(setCode(''));
                }}
              >
                ยกเลิก
              </button>
              <div
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-yellow-400 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 uppercase "
                autocomplete="off"
              >
                {lesstext(db.promotion, 30)}
              </div>
            </>
          ) : (
            <>
              <input
                type="search"
                id="default-search"
                value={db.code}
                onChange={(e) => dispatch(setCode(e.target.value))}
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 uppercase"
                placeholder="NEWYEAR2022"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={findPromotion}
              >
                ตรวจสอบ
              </button>
            </>
          )}
        </div>
      </div>
      {/*NOTE Enter Comment */}
      <label
        for="comment"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        ข้อความเพิ่มเติม
      </label>
      <textarea
        id="comment"
        rows="2"
        value={db.comment}
        onChange={(e) => dispatch(setComment(e.target.value))}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 required"
        placeholder="ข้อความเพิ่มเติม "
      ></textarea>
    </>
  );
}

export default ServiceStep;
