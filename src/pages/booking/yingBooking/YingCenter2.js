import React, { useState } from 'react';

function YingCenter2() {
  const images = [
    {
      title: 'IMG 1',
      idx: 0,
    },
    {
      title: 'IMG 2',
      idx: 1,
    },
  ];
  const [imgDisplay, setImgDisplay] = useState(images[0]);

  const handleImage = (e) => {
    const name = e.target.name;
    console.log(name);
    if (name == 'next') {
      if (imgDisplay.idx < images.length - 1) {
        setImgDisplay(images[imgDisplay.idx + 1]);
      }
    } else {
      if (imgDisplay.idx > 0) {
        setImgDisplay(images[imgDisplay.idx - 1]);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <button name="prev" className=" bg-lime-400" onClick={handleImage}>
          {'<<<'}
        </button>
        <div className="mx-2 w-60 h-60 bg-sky-400 transition-transform	duration-500">
          {imgDisplay.title}
        </div>
        <button name="next" className="bg-lime-400 " onClick={handleImage}>
          {'>>>'}
        </button>
      </div>
    </>
  );
}

export default YingCenter2;
