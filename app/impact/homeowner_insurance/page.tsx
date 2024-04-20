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
        <div>
            <h1>Impact on Home Owner Insurance price from Hurricane Katrina</h1>
            <canvas ref={canvasRef} id="myChart" width="600" ></canvas>
        </div>
    );

};

export default Homeowner_insurance;