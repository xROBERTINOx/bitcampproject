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
        <div>
            <h1>Unemployment</h1>
            <canvas ref={canvasRef} id="myChart" width="600" ></canvas>
        </div>
    );

};

export default Unemployment;