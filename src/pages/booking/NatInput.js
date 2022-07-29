import React from 'react'



function NatInput() {
    return (
        <div action="" class="relative items-center py-10">
            <div className="relative flex items-center bg-our-bg px-8 py-2 text-black focus-within:text-pink-800 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute ml-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
                <input
                    type="text"
                    placeholder="Name"
                    className=" pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required"
                />
            </div>

            <div className="relative flex items-center bg-our-bg px-8 py-2 text-black focus-within:text-pink-800 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute ml-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <input
                    type="tel"
                    placeholder="012-345-6789"
                    className=" pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required"
                />
            </div>
            <div className="relative flex items-center bg-our-bg px-8 py-2 text-black focus-within:text-pink-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute ml-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <input type="text"
                    placeholder="Comment"
                    className="pr-3 pl-10 py-2 font-semibold placeholderbg-gray-500 text-black rounded-2xl border-none ring-2 ring-black focus:ring-red-500 focus:ring-2 required">


                </input>
            </div>


            <div id="button" className="flex justify-end mr-20 py-5 gap-4 text-white">
                <button className="bg-red-500 rounded-lg px-6 py-2 hover:bg-gray-400">
                    Cancel</button>
                <button className="bg-green-500 rounded-lg px-6 py-2 hover:bg-gray-400">
                    Confirm</button>
            </div>
        </div>
    )
}

export default NatInput