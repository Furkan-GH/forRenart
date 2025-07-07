import ProductSlider from './components/ProductSlider';
import { getProducts } from './lib/getProducts';
  
export default async function Home() {
  
  const products = await getProducts();

  return (
    <>
    <div className="w-full flex justify-center items-end h-48">
      <h1 className="font-avenir-book text-[45px]">Product List</h1>
    </div>
    <div>
      <ProductSlider products={products} />;
    </div>
    </>
  );
}
