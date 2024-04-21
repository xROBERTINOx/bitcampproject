'use client';
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { labelsArray } from './labelsArray';
import { data } from './data';

let chartInstance = null; // Declare a variable to store the Chart instance

const PropertyValuesPage: React.FC = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && !chartInstance) {
            // Create a new Chart instance only if it doesn't exist
            chartInstance = new Chart(canvas, {
                type: 'scatter',
                data: {
                    labels: labelsArray,
                    datasets: [
                        {
                            label: '% interest rate',
                            data: data,
                            borderWidth: 1,
                        },
                    ],//here
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                    responsive: false,
                    maintainAspectRatio: false,
                },
            });
        }
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-8" style={{ fontFamily: 'Futura' }}>Interest Rate</h1>
                <div className="flex justify-center">
                    <canvas ref={canvasRef} id="myChart" width="600"></canvas>
                </div>
                <br></br>
                <div className="bg-gray-800 p-8 rounded-lg" style={{ width: '600px' }}>
                    <p style={{ fontFamily: 'Futura' }} className="text-center">
                        As shown by the chart, there was an increase in the interest rates following 2005, the time of Hurricane Katrina. After natural disasters, especially those as costly as Hurricane Katrina, more people, companies, and businesses need to borrow and take loans from the banks to help rebuild what the disaster destroyed. In addition to a higher risk for compensating a loan, banks will increase their interest rates to ensure making more profit.
                    </p>
                </div>
                <br></br>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="/">Back</a>
                </button>
            </div>
        </div>
    );
};

export default PropertyValuesPage;