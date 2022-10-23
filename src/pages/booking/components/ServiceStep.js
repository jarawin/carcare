import React from 'react';
import {
  setCode,
  setComment,
  setIncluded,
  setPromotion,
  selectDataBooking,
} from '../../../redux/slices/bookingSlice';
import { getCustomerId } from '../../../redux/slices/loginSlice';
import { useSelector, useDispatch } from 'react-redux';

import { GiPriceTag } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineCheck, AiFillCar } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';

import promotionsAPI from '../../../apis/promotions';
import ServicesAPI from '../../../apis/services';

// import promotions from '../../../data/mock/promotions';
// import services from '../../../data/mock/services';
import { useTranslation } from 'react-i18next';
import Spinner from './svg/Spinner';

const lesstext = (text, max) => {
  if (text.length > max) {
    return text.substring(0, max) + '...';
  } else {
    return text;
  }
};

const getQueryParams = (key) => {
  const query = new URLSearchParams(window.location.search);
  return query.get(key);
};

function ServiceStep() {
  const dispatch = useDispatch();
  const db = useSelector(selectDataBooking);
  const customerId = useSelector(getCustomerId);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [services, setServices] = React.useState([]);
  const [promotions, setPromotions] = React.useState([]);
  const [isShowDetail, setIsShowDetail] = React.useState(false);
  const [error, setError] = React.useState('');
  const { t } = useTranslation();

  const findPromotion = () => {
    var pm = promotions.find((p) => p.code === db.code);
    setIsNotFound(!pm);
    dispatch(setPromotion(pm.name));
  };

  const findPromotion2 = (promotions, code) => {
    var pm = promotions.find((p) => p.code === code);
    setIsNotFound(!pm);
    dispatch(setPromotion(pm.name));
  };

  const calPrice = (carType, service_id) => {
    const service = services.find((s) => s.service_id === service_id);
    const price = service.price_per_typeS.find(
      (p) => p.type_of_car === carType
    );
    return price.price;
  };

  const getServicesInfo = async () => {
    try {
      const res = await ServicesAPI.getServices();
      setServices(res?.data?.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  const getPromotionInfo = async () => {
    try {
      const res = await promotionsAPI.getPromotions();
      const promotions = res?.data?.data;
      console.log(JSON.stringify(promotions));
      setPromotions(promotions);

      const code = getQueryParams('code');
      if (code) {
        dispatch(setCode(code));
        findPromotion2(promotions, code);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const lessText = (text, max) => {
    if (text.length > max) {
      return text.substring(0, max) + '...';
    } else {
      return text;
    }
  };

  React.useEffect(() => {
    getServicesInfo();
    getPromotionInfo();
  }, []);

  React.useEffect(() => {
    if (db.code == '') {
      setIsNotFound(false);
    }
  }, [db]);

  return (
    <>
      {/* NOTE Service */}
      <label
        htmlFor="input-License plate"
        className="block mb-2 text-sm font-medium text-gray-900 red relative"
      >
        {t('home.service_Step')}
        <button
          className={
            (services.length < 1
              ? 'disabled bg-gray-300 dark:bg-red-800 dark:border-red-800 dark:ring-red-800 border-gray-300 ring-gray-300'
              : 'hover:bg-gray-200 hover:border-gray-200 dark:hover:bg-red-700 dark:hover:border-red-700 dark:hover:ring-red-700 hover:ring-gray-200 bg-white dark:bg-red-600 dark:border-red-600 dark:ring-red-600 border-white ring-white') +
            ' flex cursor-pointer  p-2 ring-2   rounded-md  border-2 absolute inset-y-0 right-2 items-center    '
          }
          disabled={services.length < 1}
          onClick={() => {
            // add new service
            dispatch(
              setIncluded([
                ...db.included,
                { service_id: services[0].service_id },
              ])
            );
          }}
        >
          <span className=" text-red-600 dark:text-white">
            {t('home.get_more_service')}
          </span>
        </button>
      </label>

      <div
        className={(db.included.length > 1 ? 'mb-2' : 'mb-6') + ' relative '}
      >
        <div className="flex">
          <div className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-red-500 focus:border-red-500 block w-11 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
            {services.length < 1 ? (
              <Spinner />
            ) : (
              <FaInfoCircle
                className={
                  (isShowDetail
                    ? ' dark:text-white '
                    : ' text-red-600 dark:text-red-700') + ' h-5 w-5 absolute '
                }
                onClick={(e) => setIsShowDetail(!isShowDetail)}
              />
            )}
          </div>
          <select
            // disabled={services.length < 1}
            className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            onChange={(e) => {
              {
                // change first service
                dispatch(
                  setIncluded([
                    { service_id: e.target.value },
                    ...db.included.slice(1),
                  ])
                );
              }
            }}
            defaultValue={db.included[0].service_id}
          >
            {services.length < 1 ? (
              <>
                <option selected>{t('home.loading')}</option>
              </>
            ) : (
              services.map((service, i) => {
                // const p = calPrice(db.type_car, service.service_id);

                // if (p) {
                return (
                  <option
                    key={i}
                    defaultValue={db.included[0].service_id}
                    selected
                  >
                    {isShowDetail ? service.description : service.name}
                  </option>
                );

                // }
              })
            )}
          </select>
        </div>
      </div>

      {/* NOTE Service Add */}
      {db.included.length > 1
        ? db.included.slice(1).map((serviceIncluded, idx) => (
            <div
              key={idx}
              className={
                (db.included.length - 2 <= idx ? 'mb-6' : 'mb-2') + ' flex '
              }
            >
              <div className="relative flex-auto">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  {services.length < 1 ? (
                    <Spinner />
                  ) : (
                    <FaInfoCircle
                      className={
                        (isShowDetail
                          ? ' dark:text-white '
                          : ' text-red-600 dark:text-red-700') +
                        ' h-5 w-5 absolute '
                      }
                      onClick={(e) => setIsShowDetail(!isShowDetail)}
                    />
                  )}
                </div>
                <div className="flex">
                  <div className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-red-500 focus:border-red-500 block w-11 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                    {services.length < 1 ? (
                      <Spinner />
                    ) : (
                      <FaInfoCircle
                        className={
                          (isShowDetail
                            ? ' dark:text-white '
                            : ' text-red-600 dark:text-red-700') +
                          ' h-5 w-5 absolute '
                        }
                        onClick={(e) => setIsShowDetail(!isShowDetail)}
                      />
                    )}
                  </div>
                  <select
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    onChange={(e) => {
                      {
                        // change service idx
                        dispatch(
                          setIncluded([
                            ...db.included.slice(0, idx + 1),
                            { service_id: e.target.value },
                            ...db.included.slice(idx + 2),
                          ])
                        );
                      }
                    }}
                    value={db.included[idx + 1].service_id}
                  >
                    {services.map((service, sIdx) => {
                      // const p = calPrice(db.type_car, service.service_id);

                      // if (p) {
                      return (
                        <option key={sIdx} value={service.service_id}>
                          {isShowDetail ? service.description : service.name}
                        </option>
                      );
                      // }
                    })}
                  </select>
                </div>
              </div>
              <button
                className="flex cursor-pointer border border-gray-300 hover:bg-gray-200  p-2 rounded-r-lg bg-white  right-3 items-center  dark:bg-gray-900  dark:hover:bg-gray-800  "
                onClick={() => {
                  dispatch(
                    setIncluded([
                      ...db.included.slice(0, idx + 1),
                      ...db.included.slice(idx + 2),
                    ])
                  );
                }}
              >
                <span className="text-sm px-2  dark:text-white">ลบ</span>
              </button>
            </div>
          ))
        : null}

      {/*NOTE Enter promotion */}
      <div>
        <label
          htmlFor="input-promotion"
          className="block mb-2 text-sm font-medium text-gray-900 red relative"
        >
          {t('home.promotion_Step')}
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
                {t('home.cancel')}
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
                disabled={!db.code}
                className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={findPromotion}
              >
                {t('home.verify_promo_Step')}
              </button>
            </>
          )}
        </div>
      </div>
      {/*NOTE Enter Comment */}
      <label
        htmlFor="comment"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {t('home.text_Step')}
      </label>
      <textarea
        id="comment"
        rows="2"
        value={db.comment}
        onChange={(e) => dispatch(setComment(e.target.value))}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 required"
        placeholder={t('home.text_placeholder')}
      ></textarea>
    </>
  );
}

export default ServiceStep;
