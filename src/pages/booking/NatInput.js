import React from 'react'
import { UserIcon, PhoneIcon } from '@heroicons/react/solid'


function NatInput() {
    return (
        <div className="flex items-center gap-32">

            <div id="LeftBox" className="flex items-center basis-2/3 ml-32 bg-red-300">
                Photo
            </div>
            <div id="RightBox" class="flex flex-col items-center basis-1/3 gap-7 mr-20">
                {/*NOTE Enter name */}
                <div className=" relative flex items-center bg-our-bg2 text-black focus-within:text-pink-800">
                    <UserIcon className="h-5 w-5 absolute ml-3" />
                    <input
                        type="text"
                        placeholder="Name"
                        className=" pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required"
                    />
                </div>
                {/*NOTE Enter phone number */}
                <div className="relative flex items-center bg-our-bg text-black focus-within:text-pink-800">
                    <PhoneIcon className="h-5 w-5 absolute ml-3" />
                    <input
                        type="tel"
                        placeholder="012-345-6789"
                        className="pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required"
                    />
                </div>
                {/*NOTE Enter Comment */}
                <div className="relative flex items-center bg-our-bg text-black focus-within:text-pink-800">

                    <textarea rows="5"
                        className="pr-10 pl-3 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required"
                        placeholder="Comment">
                    </textarea>
                </div>
                {/*NOTE Button */}
                <div id="button" className="flex justify-center py-3 gap-10 text-white">
                    <button className="bg-red-500 rounded-lg px-6 py-2 hover:bg-gray-400">
                        Cancel</button>
                    <button className="bg-green-500 rounded-lg px-6 py-2 hover:bg-gray-400">
                        Confirm</button>
                </div>

            </div>
        </div>
    )
}

export default NatInput