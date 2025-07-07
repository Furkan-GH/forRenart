'use client';

import Image from 'next/image';
import {  useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

  const colors = {
    yellowGold:"#E6CA97",
    whiteGold:"#D9D9D9",
    roseGold:"#E1A4A9"
  }
  
export default function Home() {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft += 500;
  };

  const [selectedColor, setSelectedColor] = useState<string>("yellowGold");

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const stars = Array(5).fill(0)
  const rating = 3;

  return (
    <>
    <div className="w-full flex justify-center items-end h-48">
      <h1 className="font-avenir-book text-[45px]">Product List</h1>
    </div>
    <div className="w-full py-15 px-6">
      <div className="relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="opacity-50 hover:opacity-100 cursor-pointer z-10"
        />
        <div
          id="slider"
          className="w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="inline-block w-[250px] h-[350px] mx-5"
            >
              <Image
                src="/favicon.ico"
                alt="Product"
                width={200}
                height={200}
                className="rounded-md my-5"
              />
              <div><p className='font-montserrat-medium text-[15]'>Product Title</p></div>
              <div><p className='font-montserrat-regular text-[15]'>$101.00 USD</p></div>
              <div className='flex items-center gap-2 mt-4 my-2'>
                  {Object.entries(colors).map(([name, value]) => (
                  <button
                    key={name}
                    onClick={() => handleColorClick(name)}
                    className={`rounded-full w-5 h-5 transition-all ${
                    selectedColor === name ? 'outline-1 outline-black outline-offset-2' : ''
                    }`}
                    style={{ backgroundColor: value }}
                  ></button>
                  ))}
              </div>
              <div><p className='font-avenir-book text-[12]'>Yellow Gold</p></div>
              <div>
                <div className='flex items-center gap-1 mt-1'>
                  {stars.map((_, index) => {
                    const filled = index + 1 <= Math.floor(rating);
                    const isHalf = index + 0.5 === rating;
                    if (filled){
                      return <FaStar key={index} size={20} color="#E6CA97" />;
                    }
                    else if(isHalf){
                      return <FaStarHalfAlt key={index} size={20} color="#E6CA97" />;
                    }
                    else{
                      return <FaRegStar key={index} size={20} color="#D9D9D9" />;
                    }
                  })

                  }
                </div>
              </div>
              
            </div>
          ))}
        
        </div>
            
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="opacity-50 hover:opacity-100 cursor-pointer z-10"
        />
      </div>
    </div>


    </>
  );
}
