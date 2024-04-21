'use client';
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { labelsInsurance } from './labelsInsurance';
import { dataInsurance } from './dataInsurance';


let chartInstance = null;


const Homeowner_insurance: React.FC = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && !chartInstance) {
            // Create a new Chart instance only if it doesn't exist
            chartInstance = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: labelsInsurance,
                    datasets: [
                        {
                            label: 'Home Owner Insurance Price',
                            data: dataInsurance,
                            borderWidth: 1,
                        },
                    ],
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
                <h1 className="text-6xl font-bold mb-8" style={{ fontFamily: 'Futura' }}>Home Owner Insurance</h1>
                <div className="flex justify-center">
                    <canvas ref={canvasRef} id="myChart" width="600"></canvas>
                </div>
                <br></br>
                <div className="bg-gray-800 p-8 rounded-lg" style={{ width: '600px', marginLeft: '85px' }}>
                    <p style={{ fontFamily: 'Futura' }} className="text-center">The given graph shows the correlation between the cost of average homeowners insurance annual premiums and the year in which that was the average. Just before 2005, there was a spike in the cost of the premiums, in reference to the price before and after. Insurance costs rise due to the escalation of the possible cost that insurance companies would need to pay post-natural disaster. However, this goes against the time immediately after the hurricane because of the decrease in the likelihood that people would be able to pay off the premiums, especially after an event that would cause many people to lose a lot of assets.</p>
                </div>
                <br></br>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="/">Back Home</a>
                </button>

            </div>
        </div>
    );

};

export default Homeowner_insurance;