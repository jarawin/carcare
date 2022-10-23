// import {
//   BoltIcon,
//   ChatBubbleBottomCenterTextIcon,
//   GlobeAltIcon,
//   ScaleIcon,
// } from '@heroicons/react/24/outline'
import { MdLocalCarWash } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

function DescripServices() {
  const { t } = useTranslation();

  const features = [
    {
      name: t('home.feature_1'),
      description: t('home.feature_descript_1'),
      // icon: GlobeAltIcon,
    },
    {
      name: t('home.feature_2'),
      description: t('home.feature_descript_2'),
      // icon: ScaleIcon,
    },
    {
      name: t('home.feature_3'),
      description: t('home.feature_descript_3'),
      // icon: BoltIcon,
    },
    {
      name: t('home.feature_4'),
      description: t('home.feature_descript_4'),
      // icon: ChatBubbleBottomCenterTextIcon,
    },
  ];

  return (
    <div className=" pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-700">
            {t('home.our_service')}
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('home.have_service')}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            {t('home.promote')}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0 lg:md:grid-cols-4">
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
