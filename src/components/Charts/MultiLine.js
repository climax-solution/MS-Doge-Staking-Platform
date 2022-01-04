import React from 'react';
import { Line } from 'react-chartjs-2';

function MultiLine({ type }) {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    let borderColor;
    // gradient.addColorStop(0, 'rgba(222, 55, 115, 0.52)');   
    // gradient.addColorStop(1, 'rgba(232, 55, 125, 0)');

    switch (type) {
      case 'blue':
        gradient.addColorStop(0, 'rgba(53, 116, 221, 0.32)');
        gradient.addColorStop(1, 'rgba(231, 231, 231, 0)');
        borderColor = "#508FF4";
        break;
      case 'red':
      case 'default':
        gradient.addColorStop(0, 'rgba(232, 55, 125, 0.22)');
        gradient.addColorStop(1, 'rgba(232, 55, 125, 0)');
        borderColor = "#E8377D";
        break;
    }


    return {
      labels: ['', '|', '04/07', '|', '06/07', '|', '08/07', '|', '10/07', ''],
      datasets: [
        {
          label: 'value',
          data: [0, 50, 57, 75, 41, 80, 65, 75, 47, 40, 86, 37],
          fill: true,
          bezierCurve: true,
          lineTension: 0.3,
          backgroundColor: 'rgba(246, 206, 14, 0.22)',
          borderColor: borderColor = "#F6CE0E"

        },
        {
          label: 'value2',
          data: [0, 60, 67, 85, 51, 90, 75, 85, 57, 50, 96, 47],
          fill: true,
          bezierCurve: true,
          lineTension: 0.3,
          backgroundColor: 'rgba(80, 143, 244, 0.22)',
          borderColor: borderColor = "#508FF4"

        },
        {
          label: 'value3',
          data: [0, 70, 67, 85, 51, 100, 75, 85, 57, 50, 96, 97],
          fill: true,
          bezierCurve: true,
          lineTension: 0.3,
          backgroundColor: 'rgba(233, 78, 97, 0.22)',
          borderColor: borderColor = "#E94E61"

        }
      ],
    }
  };

  const options = {
    plugins: {
      legend: false // Hide legend
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      },
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  )
};

export default MultiLine;
