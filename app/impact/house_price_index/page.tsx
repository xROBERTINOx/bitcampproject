'use client';
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { labelsArrayHousingPrices } from './labelsArrayHousingPricing';
import { dataHousingPrices } from './dataHousingPricing';

let chartInstance = null;

const House_price_index: React.FC = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && !chartInstance) {
            // Create a new Chart instance only if it doesn't exist
            chartInstance = new Chart(canvas, {
                type: 'scatter',
                data: {
                    labels: labelsArrayHousingPrices,
                    datasets: [
                        {
                            label: 'US House Price Index',
                            data: dataHousingPrices,
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
            <h1>Impact on US House Price Index from Natural Disasters</h1>
            <canvas ref={canvasRef} id="myChart" width="600" ></canvas>
        </div>
    );
};

export default House_price_index;