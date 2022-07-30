import React from 'react';
import { Wrapper, status } from '@googlemaps/react-wrapper';
import Carousel from './Carousel';
import About from './About';
function Home() {
  return (
    <div>
      <Carousel />

      <About />

      <div>
        <p className=" bg-red-600 rounded-xl text-center m-5">
          Tel. 012-345-6789
        </p>
      </div>

      <div className=" w-auto flex flex-wrap">
        <div>
          <img src="Rectangle_34.png" className=" p-2 rounded-xl"></img>
          <p className=" p-2 text-center">Washing</p>
        </div>
        <div>
          <img src="Rectangle_35.png" className=" p-2 rounded-xl"></img>
          <p className=" p-2 text-center">Polishing</p>
        </div>
        <div>
          <img src="Rectangle_36.png" className=" p-2 rounded-xl"></img>
          <p className=" p-2 text-center">Glass Coating</p>
        </div>
        <div>
          <img src="Rectangle_37.png" className=" p-2 rounded-xl"></img>
          <p className=" p-2 text-center">Cleaning Seat</p>
        </div>
      </div>

      <div>
        <p className=" text-center">CONTRACT</p>
        <p className=" text-center m-5">
          Ground floor parking lot, Lotus Department Store, Khao Rup Chang
          Subdistrict, Mueang Songkhla District, Songkhla 90000
        </p>
      </div>

      <div>
        <p className=" bg-red-600 text-center p-1 bg-full">
          Copyright © CarCareManager.com
        </p>
      </div>

      <div className=" bg-white w-auto flex flex-wrap">
        <div className=" bg-white w-auto flex flex-wrap">
          <img src="phone.png"></img>
          <p className=" bg-white text-black text-xl w-80 h-10">012-345-6789</p>
        </div>
        <div className=" bg-white w-auto flex flex-wrap">
          <img src="mail.png"></img>
          <p className=" bg-white text-black text-xl w-80 h-10">
            carcare_manager@gmail.com
          </p>
        </div>
        <div className=" bg-white w-auto flex flex-wrap">
          <img src="line.png"></img>
          <p className=" bg-white text-black text-xl w-80 h-10">
            @CarCareManager
          </p>
        </div>
        <div className=" bg-white w-auto flex flex-wrap">
          <img src="time.png"></img>
          <p className=" bg-white text-black text-xl w-80 h-10">
            8.00 am - 8.00 pm
          </p>
        </div>
        <div className=" bg-white w-auto flex flex-wrap">
          <img src="location.png"></img>
          <a href="#" className=" bg-white text-black text-xl w-80 h-10">
            Car Care Manager
          </a>
        </div>
        <div className=" bg-white w-auto flex flex-wrap">
          <img src="facebook.png"></img>
          <p className=" bg-white text-black text-xl w-80 h-10">
            KSR Spa Car Clean
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
