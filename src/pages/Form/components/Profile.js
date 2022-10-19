import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataUser, setProfile } from '../../../redux/slices/loginSlice';

function Profile() {
  const dispatch = useDispatch();
  const dataUser = useSelector(getDataUser);
  const fileInput = useRef(null);

  //   const handleUpload = (e) => {
  //     e.preventDefault();
  // const file = fileInput.current.files[0];
  // const formData = new FormData();
  // formData.append('image', file);
  // dispatch(setProfile({ ...dataUser, image_url: file }));
  //   };

  return (
    <div className="mt-10">
      {/* NOTE Profile */}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1 mt-5 md:ml-3">
          <div className="px-4 sm:px-0 text-right">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              โปรไฟล์
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              ข้อมูลส่วนตัวของคุณ
            </p>
          </div>
        </div>

        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="">
                {/* NOTE Picture Profile */}
                <div className="mx-auto ">
                  <label className=" text-sm font-medium text-gray-700">
                    รูปโปรไฟล์
                  </label>
                  <div className=" mt-1 flex items-center">
                    <img
                      className="h-14 w-14 overflow-hidden rounded-full"
                      src={dataUser?.image_url}
                    ></img>
                    <button className="w-14 h-8 relative ml-5 rounded-md border border-gray-300 bg-white text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      เปลี่ยน
                      <input
                        type="file"
                        className="opacity-10 absolute w-full h-full"
                        ref={fileInput}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  คำนำหน้า
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>นาย</option>
                  <option>นาง</option>
                  <option>นางสาว</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  ชื่อจริง
                </label>
                <input
                  type="text"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  นามสกุล
                </label>
                <input
                  type="text"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700">
                  อีเมล
                </label>
                <input
                  type="text"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
