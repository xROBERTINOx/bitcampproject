'use client';
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { labelsUnemployment } from './labelsUnemployment';
import { dataUnemployment } from './dataUnemployment';

let chartInstance = null; // Declare a variable to store the Chart instance

const Unemployment: React.FC = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && !chartInstance) {
            // Create a new Chart instance only if it doesn't exist
            chartInstance = new Chart(canvas, {
                type: 'scatter',
                data: {
                    labels: labelsUnemployment,
                    datasets: [
                        {
                            label: '% unemployment',
                            data: dataUnemployment,
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
                <h1 className="text-6xl font-bold mb-8" style={{ fontFamily: 'Futura' }}>Unemployment</h1>
                <div className="flex justify-center">
                    <canvas ref={canvasRef} id="myChart" width="600"></canvas>
                </div>
                <br></br>
                <div className="bg-gray-800 p-8 rounded-lg" style={{ width: '600px' }}>
                    <p style={{ fontFamily: 'Futura' }} className="text-center">As represented by the chart, unemployment rates for Louisiana doubled in 2005, the time directly after Hurricane Katrina. When the number of people currently receiving income deteriorates, so does the number of people who can buy a home or pay off their mortgage.</p>
                </div>
                <br></br>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="/">Back Home</a>
                </button>

            </div>
        </div>
    );

};

export default Unemployment;