"use client"
import Image from 'next/image';
import {  useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import StarRating from './StarRating';

  const colors = {
    yellowGold:"#E6CA97",
    whiteGold:"#D9D9D9",
    roseGold:"#E1A4A9"
  }

  type Product = {
  name: string;
  popularityScore: number;
  weight: number;
  images: {
    yellow: string;
    rose: string;
    white: string;
  };
};

export default function ProductSlider({ products }: { products: Product[] }) {

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

  const [goldPrice,setGoldPrice] = useState<number>();
  
  useEffect(() =>{
    fetch("/api/getGoldPrice")
    .then(res => res.json())
    .then(data => setGoldPrice(data));
  },[])

  const getPrice = (getGoldPrice: number,pScore: number,weight:number) => {
    const totalPrice = (pScore + 1)*weight*getGoldPrice;
    return totalPrice.toFixed(2);
  };

    return(
        <>
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
                  {products.map((product,index) => (
                    <div
                      key={index}
                      className="inline-block w-[250px] h-[350px] mx-5"
                    >
                      <Image
                        src={product.images.yellow}
                        alt="Product"
                        width={200}
                        height={200}
                        className="rounded-md my-5"
                      />
                      <div><p className='font-montserrat-medium text-[15]'>{product.name}</p></div>
                      <div>{goldPrice !== undefined && (<p className='font-montserrat-regular text-[15]'> ${getPrice(goldPrice,product.popularityScore,product.weight)} USD</p>)} </div>
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
                        <StarRating score = {product.popularityScore} />
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
    )
}