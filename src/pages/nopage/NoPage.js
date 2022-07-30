import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Login from './Login';
// import welcome from './welcome2.png';
import { AiFillHome, AiTwotoneHome } from 'react-icons/ai';
import { FcHome } from 'react-icons/fc';
import { ArrowDownIcon } from '@heroicons/react/solid';

function NoPage() {
  return (
    <>
      <div className="relative w-96 h-96 bg-yellow-700">
        <div className="block bg-lime-500 w-10 h-10 mx-auto"></div>
        <div className="absolute bg-pink-500 w-10 h-5 bottom-0 left-0">
          <p>1234567</p>
        </div>
      </div>
    </>
  );
}

export default NoPage;
