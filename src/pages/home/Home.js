import React from 'react'
import Carousel from './Carousel'
import ' ./ping.module.css'
function Home() {
     return (
          <div className='bg-gray-200'>
               <div className=' relative'>
                    <div className=' '><Carousel /></div>
                    <div className=' absolute bottom-10 left-12 md:bottom-20 md:left-20'>
                         <button className="bg-black rounded-xl h-20 w-40 md:h-40 bg-opacity-30
                    border-l-[2px] border-l-white
                    border-r-[2px] border-r-white
                    border-t-[2px] border-t-white">
                              <p className=' text-white'>discount 20%</p>
                              <div className=' absolute left-0'>
                                   <button className="bg-red-700 bottom rounded-lg h-10 -bottom-12 w-40 absolute  md:-bottom-20
                                                  border-l-[2px] border-l-white
                                                  border-r-[2px] border-r-white
                                                  border-b-[2px] border-b-white
                                                  border-t-[2px] border-t-white">
                                        <p className=' text-white'>booking</p>
                                   </button>
                              </div>
                         </button>


                    </div>
               </div>


               <div className=' mx-auto text-center'>
                    <p className='m-5 pt-6'>CAR CARE MANAGER</p>
                    <p className='mx-auto max-w-lg whitespace-normal'>Car care manager has brought a new management system to build on the car care
                         business. We have a comprehensive service for you. We will stand up to premium
                         quality to make your wishes shine true.</p>
               </div>

               <div className=' pt-4'>
                    <p className=' bg-red-600 rounded-xl text-center w-48 mx-auto m-4 text-white'>Tel. 012-345-6789</p>
               </div>

               <div className=" w-auto flex flex-wrap justify-center space-x-8 p-7">
                    <div>
                         <img src="Rectangle_34.png" className=" p-2 rounded-xl"></img>
                         <p className=" p-2 text-center">Dynamic Wash</p>
                    </div>
                    <div>
                         <img src="Rectangle_35.png" className=" p-2 rounded-xl"></img>
                         <p className=" p-2 text-center">Polishing</p>
                    </div>
                    <div>
                         <img src="Rectangle_36.png" className=" p-2 rounded-xl"></img>
                         <p className=" p-2 text-center">Coating</p>
                    </div>
                    <div>
                         <img src="Rectangle_37.png" className=" p-2 rounded-xl"></img>
                         <p className=" p-2 text-center">Clean Interior</p>
                    </div>
               </div>

               <div>
                    <p className=" text-center p-7">CONTRACT</p>
                    <p className=" text-center m-5">
                         Ground floor parking lot, Lotus Department Store, Khao Rup Chang
                         Subdistrict, Mueang Songkhla District, Songkhla 90000
                    </p>
                    <p className=" bg-orange-300 text-center m-5">
                         Google Map
                    </p>
               </div>
          </div >
     );
}
export default Home;
