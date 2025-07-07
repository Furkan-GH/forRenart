"use client"
import {  useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ProductCard from './ProductCard';

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

  const [goldPrice,setGoldPrice] = useState<number>();
  
  useEffect(() =>{
    fetch("/api/getGoldPrice")
    .then(res => res.json())
    .then(data => setGoldPrice(data));
  },[])

    return(
        <>
        <div className="w-full py-15 px-6">
            <div className="relative flex items-center">
                <MdChevronLeft onClick={slideLeft} size={40} className="opacity-50 hover:opacity-100 cursor-pointer z-10"/>
                <div id="slider" className="w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} goldPrice={goldPrice} />
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className="opacity-50 hover:opacity-100 cursor-pointer z-10" />
            </div>
        </div>
        </>
    )
}