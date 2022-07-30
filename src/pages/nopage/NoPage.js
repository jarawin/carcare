import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Login from './Login';
// import welcome from './welcome2.png';
import { AiFillHome, AiTwotoneHome } from 'react-icons/ai';
import { FcHome } from 'react-icons/fc';
import { ArrowDownIcon } from '@heroicons/react/solid';
import Stepper from './Stepper';

function NoPage() {
  return (
    <>
      <Stepper />
    </>
  );
}

export default NoPage;
