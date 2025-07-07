import { useState } from "react";
import StarRating from "./StarRating";
import Image from "next/image";

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

export default function ProductCard({product,goldPrice}:{product: Product, goldPrice?: number}) {
  
  const [selectedColor, setSelectedColor] = useState<string>("yellowGold");

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const imageSrc = product.images[
    selectedColor === "yellowGold"
      ? "yellow"
      : selectedColor === "whiteGold"
      ? "white"
      : "rose"
  ];

  const getPrice = (
    getGoldPrice: number,
    pScore: number,
    weight: number
  ) => {
    const totalPrice = (pScore + 1) * weight * getGoldPrice;
    return totalPrice.toFixed(2);
  };
  
  return(
    <>
    <div className="inline-block w-[250px] h-[350px] mx-5">
      <Image src={imageSrc} alt="Product" width={200} height={200} className="rounded-md my-5"/>
      <p className="font-montserrat-medium text-[15px]">{product.name}</p>
        {goldPrice !== undefined && (
          <p className="font-montserrat-regular text-[15px]">
          ${getPrice(goldPrice, product.popularityScore, product.weight)} USD</p>
        )}{goldPrice == undefined && (<p className="font-montserrat-regular text-[15px]">...</p>)}
      <div className="flex items-center gap-2 mt-4 my-2">
        {Object.entries(colors).map(([name, value]) => (
          <button key={name} onClick={() => handleColorClick(name)} className={`rounded-full w-5 h-5 transition-all ${
              selectedColor === name
                ? "outline-1 outline-black outline-offset-2"
                : ""
            }`}
            style={{ backgroundColor: value }}
          ></button>
        ))}
      </div>
      <p className="font-avenir-book text-[12px]">
        {selectedColor === "yellowGold" && "Yellow Gold"}
        {selectedColor === "whiteGold" && "White Gold"}
        {selectedColor === "roseGold" && "Rose Gold"}
      </p>
      <StarRating score={product.popularityScore} />
    </div>
    </>
  )
}