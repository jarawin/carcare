import React from 'react'

import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RiCarWashingFill } from 'react-icons/ri';

function NatRightBox() {
    const data = [
        '9:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '13:00 PM',
        '14:00 PM',
        '15:00 PM',
        '16:00 PM',
        '17:00 PM',
    ];


    return (

        <div action="" class="">
            <div className=" bg-our-bg px-8 py-2 text-black focus-within:text-pink-800 mb-1">
                <BsFillPersonFill class="flex flex-col w-5 h-5 absolute ml-3 mt-2.5 pointer-events-none" />
                <input
                    type="text"
                    placeholder="Name"
                    className=" pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required"
                />
            </div>

            <div className=" bg-our-bg px-8 py-2 text-black focus-within:text-pink-800 mb-2">
                <BsFillTelephoneFill class="w-5 h-5 absolute ml-3 mt-2.5 pointer-events-none" />
                <input
                    type="tel"
                    placeholder="012-345-6789"
                    className=" pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required"
                />
            </div>
            <div className="bg-our-bg px-8 py-2 text-black focus-within:text-pink-800 mb-2">
                <input
                    type="text"
                    placeholder="Comment"
                    className="pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required"
                />
            </div>
        </div>



    );
}

export default NatRightBox