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
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
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