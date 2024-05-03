import Image from "next/image";
import { Card } from "flowbite-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Ecommerce website focus drink priority",
};

export default function About() {
  return (
    <>
      <header className="bg-gray-600 h-[50vh] justify-center place-content-center text-center">
        <div className="text-gray-100 text-3xl md:text-4xl lg:text-5xl mb-6 font-extrabold">About Us</div>
        <p className="text-gray-100 text-sm md:text-base lg:text-lg xl:text-xl mb-6 font-semibold">Explore our curated collection of meticulously designed furniture, where each piece embodies timeless elegance and unparalleled craftsmanship, telling a story of passion and dedication.</p>
      </header>
      <main className="flex flex-col md:flex-row bg-gray-400">
        <section className="p-6 md:w-1/2">
          <div className="p-4 md:p-12">
            <h1 className="font-extrabold text-lg md:text-4xl lg:text-5xl mb-8 text-gray-100">Why Choose Us</h1>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              Exceptional Quality: Our products are crafted with meticulous attention to detail and unparalleled craftsmanship.
            </p>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              Exceptional Quality: Our products are crafted with meticulous attention to detail and unparalleled craftsmanship.
            </p>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              Exceptional Quality: Our products are crafted with meticulous attention to detail and unparalleled craftsmanship.
            </p>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              Exceptional Quality: Our products are crafted with meticulous attention to detail and unparalleled craftsmanship.
            </p>
          </div>
        </section>
        <div className="w-full md:w-1/2">
          <Image
            src="/drink_about.jpg"
            alt="Drink photo"
            width={500}
            height={200}
            className="m-8 justify-center"
          />
        </div>
      </main>
      <article className="flex ml-12 mr-12 mt-12 justify-center place-content-center">
        <Card
          className="max-w-sm"
          imgAlt="Drink"
          imgSrc="/coca.jpg"
        >
        </Card>
        <Card
          className="max-w-sm ml-12"
          imgAlt="Drink"
          imgSrc="/sprite.jpg"
        >
        </Card>
        <Card
          className="max-w-sm ml-12"
          imgAlt="Drink"
          imgSrc="/pepsi.jpg"
        >
        </Card>
      </article>
      
    </>
  );
}