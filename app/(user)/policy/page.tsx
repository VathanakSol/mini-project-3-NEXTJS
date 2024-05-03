import { Card } from "flowbite-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Policy",
  description: "Drink policy",
}

export default function policy() {
  return (
    <>
      <header className="bg-gray-600 h-[50vh] justify-center place-content-center text-center">
        <div className="text-gray-100 text-3xl md:text-4xl lg:text-5xl mb-6 font-extrabold">Our Policy</div>
        <p className="text-gray-100 text-sm md:text-base lg:text-lg xl:text-xl mb-6 font-semibold ml-10 mr-10">This policy outlines the regulations for the sale and consumption of drinks on our premises (or website, if applicable). We are committed to responsible practices and promoting a safe and enjoyable environment for all our customers.</p>
      </header>
      <main className="flex flex-col md:flex-row bg-gray-500">
        <section className="p-6 md:w-1/2 ">
          {/* Section 1 */}
          <div className="p-4 md:p-12 w-[100vw]">
            <h1 className="font-extrabold text-lg md:text-4xl lg:text-5xl mb-8 text-gray-100">Age Verification</h1>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              We strictly adhere to all local and national laws regarding the minimum legal drinking age.
            </p>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              Customers attempting to purchase alcoholic beverages must present a valid government-issued ID that proves they are of legal drinking age.
            </p>
          </div>
          {/* Section 2 */}
          <div className="p-4 md:p-12 w-[100vw]">
            <h1 className="font-extrabold text-lg md:text-4xl lg:text-5xl mb-8 text-gray-100">Responsible Consumption</h1>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              We encourage our customers to drink responsibly. We reserve the right to refuse service to anyone who appears intoxicated or whose behavior could be disruptive or unsafe.
            </p>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              We may offer information on responsible drinking practices and resources for those seeking help with alcohol abuse.
            </p>
          </div>
          {/* Section 3 */}
          <div className="p-4 md:p-12 w-[100vw]">
            <h1 className="font-extrabold text-lg md:text-4xl lg:text-5xl mb-8 text-gray-100">Alcohol Content and Labeling</h1>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              All alcoholic beverages will clearly display their alcohol content by volume (ABV) on menus, product descriptions, or labels.
            </p>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              We will not make exaggerated or misleading claims about the effects of alcoholic beverages.
            </p>
          </div>
          {/* Section 4 */}
          <div className="p-4 md:p-12 w-[100vw]">
            <h1 className="font-extrabold text-lg md:text-4xl lg:text-5xl mb-8 text-gray-100">Restricted Sales</h1>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              We may restrict the sale of certain drinks, such as high-proof alcohol or large quantities, to promote responsible consumption.
            </p>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              We reserve the right to refuse service at any time and for any reason, including suspected underage drinking or intoxication.
            </p>
          </div>
          {/* Section 5 */}
          <div className="p-4 md:p-12 w-[100vw]">
            <h1 className="font-extrabold text-lg md:text-4xl lg:text-5xl mb-8 text-gray-100">Contact Information</h1>
            <p className="flex gap-4 text-sm md:text-base lg:text-lg">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
              </span>
              If you have any questions or concerns regarding this policy, please do not hesitate to contact [insert contact information, such as name, phone number, or email address].
            </p>
          </div>
        </section>
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
  )
}
