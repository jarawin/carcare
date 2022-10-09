// import {
//   BoltIcon,
//   ChatBubbleBottomCenterTextIcon,
//   GlobeAltIcon,
//   ScaleIcon,
// } from '@heroicons/react/24/outline'
import { MdLocalCarWash } from 'react-icons/md';

const features = [
  {
    name: 'ล้างสีดูดฝุ่น',
    description: 'ล้างสีดูดฝุ่นรถยนต์ รถจักรยานยนต์',
    // icon: GlobeAltIcon,
  },
  {
    name: 'เคลือบแก้ว',
    description: 'เคลือบแก้วรถยนต์ รถจักรยานยนต์',
    // icon: ScaleIcon,
  },
  {
    name: 'ฟอกเบาะ',
    description: 'ฟอกเบาะรถยนต์ รถจักรยานยนต์',
    // icon: BoltIcon,
  },
  {
    name: 'ขัดสี',
    description: 'ขัดเคลือบสีรถยนต์ รถจักรยานยนต์',
    // icon: ChatBubbleBottomCenterTextIcon,
  },
];

function DescripServices() {
  return (
    <div className=" pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-700">
            บริการของเรา
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            เรามีบริการอะไรบ้าง
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            คุ้มค่าคุ้มราคา รวดเร็ว และทุกบริการประทับใจ
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-700 text-white">
                    <MdLocalCarWash size={25} />
                    {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default DescripServices;
