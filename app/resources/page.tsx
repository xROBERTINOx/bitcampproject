import React from 'react';

const ResourcesPage: React.FC = () => {
    return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <div>
            <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Futura' }}>
                Resources Page
            </h1>
        </div>
        <div>
            <h1 className="text-2xl font-bold mb-8" style={{ fontFamily: 'Futura' }}>
                Housing Data
            </h1>
        </div>
        
        <div className="grid grid-cols-2 gap-8">

            <div className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Futura' }}>
                    Zillow Data and APIs
                </h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="https://www.zillowgroup.com/developers/" target="_blank" rel="noopener noreferrer">Learn More</a>
                </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Futura' }}>
                    Github List of Housing APIs
                </h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="https://gist.github.com/patpohler/36c731113fd113418c0806f62cbb9e30" target="_blank" rel="noopener noreferrer">Learn More</a>
                </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Futura' }}>
                    NASDAQ Housing APIs
                </h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="https://blog.data.nasdaq.com/api-for-housing-data" target="_blank" rel="noopener noreferrer">Learn More</a>
                </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Futura' }}>
                    YChart US House Price Index
                </h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="https://ycharts.com/indicators/us_house_price_index#:~:text=Basic%20Info-,US%20House%20Price%20Index%20is%20at%20a%20current%20level%20of,6.35%25%20from%20one%20year%20ago." target="_blank" rel="noopener noreferrer">Learn More</a>
                </button>
            </div>

        </div>
<br></br>
        <div>
            <h1 className="text-2xl font-bold mb-8" style={{ fontFamily: 'Futura' }}>
                Weather and Climate
            </h1>
        </div>

        <div className="grid grid-cols-2 gap-8">

        <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Futura' }}>
                        Open-Mateo Climate API
                    </h2>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href="https://open-meteo.com/en/docs/climate-api" target="_blank" rel="noopener noreferrer">Learn More</a>
                    </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Futura' }}>
                        NCDC Climate API
                    </h2>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href="https://www.ncdc.noaa.gov/cdo-web/webservices/v2" target="_blank" rel="noopener noreferrer">Learn More</a>
                    </button>
            </div>

        </div>

    </main>
    );
};

export default ResourcesPage;