import React from 'react';

function Carousel() {
  return (
    <>
      <img src="test_pic.jpg" className=" h-full w-full rounded-xl "></img>
      <div className=" w-0 h-0 border-b-grey-600 border-b-[100px] border-r-transparent border-r-[500px] border-l-transparent border-l-[0px]"></div>
    </>
  );
}

export default Carousel;
