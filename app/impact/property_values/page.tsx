'use client';
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

let chartInstance = null; // Declare a variable to store the Chart instance

const PropertyValuesPage: React.FC = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && !chartInstance) {
            // Create a new Chart instance only if it doesn't exist
            chartInstance = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [100, 150, 200, 180, 220, 250, 300, 280, 320, 350, 400, 380, 420, 450, 500, 480, 520, 550, 600, 580, 620],
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
                },
            });
        }
    }, []);

    return (
        <div>
            <h1>Impact on Property Values from Natural Disasters</h1>
            <canvas ref={canvasRef} id="myChart"></canvas>
        </div>
    );
};

export default PropertyValuesPage;