'use client';

import Image from 'next/image';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


export default function Home() {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) slider.scrollLeft += 500;
  };
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
              className="inline-block w-[200px] mx-2"
            >
              <Image
                src="/vercel.svg"
                alt="Product"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h2 className="text-center text-sm mt-2">Product Name</h2>
              <p className="text-center text-xs text-gray-600">$101.00</p>
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
