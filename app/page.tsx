import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ fontFamily: "Poppins, Arial, sans-serif" }}>
      <h1 className="text-4xl font-bold mb-8">
        Natural Disasters and the Housing Market
      </h1>
      
      <p className="text-lg mb-8">
        Welcome to our website! Here, we explore the relationship between natural disasters and the housing market. 
        We analyze how different types of natural disasters impact property values, housing demand, and insurance rates.
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
            Housing Pricing
          </h2>
          <p>
            The occurrence of natural disasters can affect housing price changes in affected areas. 
            Some homebuyers may be hesitant to purchase properties in disaster-prone regions, leading to a decrease in price.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/impact/housing_pricing">Learn More</a>
          </button>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Explore Further
        </h2>
        <p>
          If you're interested in learning more about the relationship between natural disasters and the housing market, 
          check out our resources section for in-depth articles, research papers, and case studies.
        </p>
      </div>
      
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </main>
  );
}
