import React from 'react';
import { Line } from 'react-chartjs-2';


function LineChart({ type }) {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    let borderColor;
    // gradient.addColorStop(0, 'rgba(222, 55, 115, 0.52)');   
    // gradient.addColorStop(1, 'rgba(232, 55, 125, 0)');

    switch (type) {
      case 'yellow':
        gradient.addColorStop(0, 'rgba(246, 206, 14, .35)');
        gradient.addColorStop(1, 'rgba(246, 206, 14, 0)');
        borderColor = "#F6CE0E";
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
          label: '$',
          data: [0, 200000000, 154000000, 335000000, 400000000, 360000000, 454000000, 480000000, 600000000, 645000000, 745000000, 800000000],
          fill: true,
          bezierCurve: true,
          lineTension: 0.3,
          backgroundColor: gradient,
          borderColor: borderColor,

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
      {/* <div className='header'>
      <h1 className='title'>Line Chart</h1>
    </div> */}
      <Line data={data} options={options} />

    </>
  )
};

export default LineChart;
