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
        <div>
            <h1>Impact on Interest Rates from Natural Disasters</h1>
            <canvas ref={canvasRef} id="myChart" width="600" ></canvas>
        </div>
    );
};

export default PropertyValuesPage;