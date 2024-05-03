import { ProductList } from "@/components/CardComponent"
import Image from "next/image";


export default function Home() {
  return (
    <>
      <header className="container px-8 w-[100vw] grid place-content-center">
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 mb-6">
        {/* Main image */}
        <div className="md:w-1/3 mb-4 md:mb-0 pr-4 mr-2">
          <Image
            src="/coca_BA.jpg"
            alt="Coca-Cola drink photo"
            width={600}
            height={100}
            className="rounded-xl hover:opacity-80 transition-all ease-in-out cursor-pointer active:opacity-50"
          />
        </div>
        {/* Secondary images */}
        <div className="grid md:flex-row md:w-1/3 gap-4 top-0 justify-center align-center">
          <div className="w-full">
            <Image
              src="/drink_banner.jpg"
              alt="Coca-Cola drink photo"
              width={350}
              height={100}
              className="rounded-xl hover:opacity-80 transition-all ease-in-out cursor-pointer active:opacity-50"
            />
          </div>
          <div className="w-full">
            <Image
              src="/purple_drink.jpg"
              alt="Coca-Cola drink photo"
              width={350}
              height={100}
              className="rounded-xl hover:opacity-80 transition-all ease-in-out cursor-pointer active:opacity-50"
            />
          </div>
        </div>
        <div className="grid justify-center text-center ">
          <p className="font-bold">Too Hot, Too Thirsty </p>
          <button className="mt-4 w-[15vw] bg-gray-900 text-gray-100 p-2 rounded-lg text-lg flex justify-center hover:opacity-80 transition-all ease-in-out cursor-pointer active:opacity-50 hover:text-white">Shop Now</button>
        </div>
      </div>
    </header>
    <main className="pr-16 pl-16 mb-16">
      <h1 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl mb-16 font-extrabold text-center">Our Partner</h1>
      <Image
        src="/banner.jpg"
        alt="banner drink"
        width={500}
        height={400}
        className="flex justify-center w-[100vw] pl-16"
      >
      </Image>
    </main>
    <article>
      <h1 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl mb-6 font-extrabold text-center">Products</h1>
      <ProductList />
    </article>
    
    </>
    
  );
}