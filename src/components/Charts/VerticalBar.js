import React from 'react';
import { Bar, Chart } from 'react-chartjs-2';

const data = {
  labels: ['04/07', '06/07', '08/07', '10/07'],
  
  datasets: [
    {
      label: 'q',
      data: [5, 11, 8, 15, 10, 11,15, 1, 5, 12, 13, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'w',
      data: [6, 7, 8, 9, 10, 11,12, 13, 14, 15,16, 17],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'e',
      data: [7, 8, 9, 10, 11, 12,13, 14, 15, 16,17, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'r',
      data: [8, 9, 10, 11, 12, 13 , 14, 10, 15, 16, 17, 20],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    
    {
      label: 't',
      data: [10, 15, 8, 10, 12, 18,19, 17, 16, 15, 14, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'y',
      data: [5, 10, 8, 15, 13, 18,5, 10, 8, 15, 13, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'u',
      data: [5, 10, 8, 15, 13, 18,5, 10, 8, 15, 13, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'i',
      data: [5, 10, 8, 15, 13, 15,5, 1, 10, 12, 13, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'o',
      data: [5, 11, 8, 15, 10, 11,15, 1, 5, 12, 13, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'p',
      data: [6, 7, 8, 9, 10, 11,12, 13, 14, 15,16, 17],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'a',
      data: [7, 8, 9, 10, 11, 12,13, 14, 15, 16,17, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 's',
      data: [8, 9, 10, 11, 12, 13 , 14, 10, 15, 16, 17, 20],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'd',
      data: [6, 7, 8, 9, 10, 11,12, 13, 14, 15,16, 17],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'f',
      data: [7, 8, 9, 10, 11, 12,13, 14, 15, 16,17, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'g',
      data: [6, 7, 8, 9, 10, 11,12, 13, 14, 15,16, 17],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'h',
      data: [7, 8, 9, 10, 11, 12,13, 14, 15, 16,17, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'j',
      data: [8, 9, 10, 11, 12, 13 , 14, 10, 15, 16, 17, 20],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'k',
      data: [6, 7, 8, 9, 10, 11,12, 13, 14, 15,16, 17],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
    {
      label: 'l',
      data: [7, 8, 9, 10, 11, 12,13, 14, 15, 16,17, 18],
      backgroundColor: [
        '#F8DA4A',
      ],
      borderColor: [
        '#F8DA4A',
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
      legend: false // Hide legend
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    x: {
      grid:{
       display:false
           }
     },
     y: {
      grid:{
       display:false
           }
     },
  },
};



// const data = (canvas) => {
//   const ctx = canvas.getContext("2d");
  
//   return {
//     labels: [
//       'January',
//       'February',
//       'March',
//       'April'
//     ],
//     datasets: [{
//       type: 'line',
//       label: 'line Dataset',
//       data: [30, 20, 30, 50, 100],
//       borderColor: 'rgb(255, 99, 132)',
//        fill: false,
//     }, {
//       type: 'line',
//       label: 'Line Dataset',
//       data: [30, 20, 50, 40, 35],
//       fill: false,
//       borderColor: 'rgb(54, 162, 235)'
//     }]
//   }
// }


// const config = {
//   type: 'scatter',
//   data: data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// };
// var mixedChart = new Chart( {
//   data: data,
//   options: config
// });


const VerticalBar = () => (
  <>
    {/* <div className='header'>
      <h1 className='title'>Vertical Bar Chart</h1>
      <div className='links'>
      </div>
    </div> */}
    <Bar data={data} options={options} />
    {/* {mixedChart} */}
  </>
);

export default VerticalBar;
