import React, { useEffect, useState } from 'react';
import { Transition } from '@tailwindui/react';
import { Link, Navigate } from 'react-router-dom';
import Login from './Login';
// import welcome from './welcome2.png';
import { AiFillHome, AiTwotoneHome } from 'react-icons/ai';
import { FcHome } from 'react-icons/fc';
import { ArrowDownIcon } from '@heroicons/react/solid';
import Stepper from './Stepper';

function NoPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className=" bg-orange-500 rounded-md p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* Will fade in and out */}
        <div>123</div>
      </Transition>
    </>
  );
}

export default NoPage;
