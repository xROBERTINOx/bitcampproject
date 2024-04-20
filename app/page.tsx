import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ fontFamily: "Futura, Arial, sans-serif" }}>
      <h1 className="text-4xl font-bold mb-8">
        Natural Disasters and the Housing Market (Hurricane Katrina)
      </h1>
      
      <p className="text-lg mb-8">
        Welcome to our website! Here, we explore the relationship between natural disasters and the housing market following Hurricane Katrina. 
      </p>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Impact on Interest Rates
          </h2>
          <p>
            Natural disasters can have a significant impact on interst rates. 
            Properties located in areas prone to frequent disasters may experience changes in interest rates.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/impact/interest_rate">Learn More</a>
          </button>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Average Homeowners Insurance
          </h2>
          <p>
            Because of the speculations of Hurricane Katrina, a year before the hurricane hit, the insurance rates spiked up and then dropped after the hurricane.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/impact/homeowner_insurance">Learn More</a>
          </button>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Unemployment Rate
          </h2>
          <p>
            Because of all the damage done to the city, the unemployment rate spiked up after the hurricane hit.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/impact/unemployment_rate">Learn More</a>
          </button>
        </div>



        <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Explore Further
        </h2>
        <p>
          Checkout our resources page to learn more about the impact of natural disasters on the housing market.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/resources">Resources</a>
        </button>
      </div>


      </div>
      
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </main>
  );
}
