import React from 'react';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import classNames from '../../../utils/classNames';

function Banner() {
  const { t } = useTranslation();
  const [closed, setClosed] = useState(false);

  return (
    <div
      className={classNames(
        closed ? 'hidden' : 'flex',
        'items-center justify-center bg-red-700 '
      )}
    >
      <button
        type="button"
        className="absolute rounded-md text-gray-100 dark:text-white right-3"
        onClick={() => setClosed(true)}
      >
        <span className="sr-only">Close banner</span>
        <XIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <p className=" h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
        {t('nav.banner')}
      </p>
    </div>
  );
}

export default Banner;
