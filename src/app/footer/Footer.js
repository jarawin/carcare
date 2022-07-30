import React, { useState } from 'react';
import MultiLang from './MultiLang';

function Footer() {
  const [lang, setLang] = useState('en');
  const [isOpenLang, setIsOpenLang] = useState(false);

  return (
    <footer class="bg-white dark:bg-neutral-900">
      <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-neutral-500 uppercase dark:text-neutral-400">
            Company
          </h2>
          <ul class="text-neutral-500 dark:text-neutral-400">
            <li class="mb-4">
              <a href="#" class=" hover:underline">
                About
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Careers
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Brand Center
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-neutral-500 uppercase dark:text-neutral-400">
            Help center
          </h2>
          <ul class="text-neutral-500 dark:text-neutral-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Discord Server
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Twitter
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Facebook
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-neutral-500 uppercase dark:text-neutral-400">
            Legal
          </h2>
          <ul class="text-neutral-500 dark:text-neutral-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Licensing
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-neutral-500 uppercase dark:text-neutral-400">
            Download
          </h2>
          <ul class="text-neutral-500 dark:text-neutral-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">
                iOS
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Android
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Windows
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                MacOS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex py-6 px-4 bg-neutral-100 dark:bg-neutral-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-neutral-500 dark:text-neutral-300 sm:text-center">
          © 2022 <a>KSR Carcare™</a>. All Rights Reserved.
        </span>

        <MultiLang
          lang={[[lang, setLang]]}
          isOpen={[isOpenLang, setIsOpenLang]}
        />
      </div>
    </footer>
  );
}

export default Footer;
