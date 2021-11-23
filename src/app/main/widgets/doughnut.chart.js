import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
    
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
    responsive: true,
    plugins: {
      legend:{
        display:false
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart - Cubic interpolation mode'
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      
      x: {
        display: false,
        
        grid:{
          display:false,
          drawBorder: false, // <-- this removes y-axis line

          
      },
        title: {
          display: false
        }
      },
      y: {
        display: false,
        grid:{
            drawBorder: false, // <-- this removes y-axis line
            lineWidth: 0.5,
            borderDash: [8, 4],
            color: "#C1C7D9"
        },
        
        max: 20,
        min: 0 ,
        
        ticks: {
           stepSize: 4,
           fontColor: 'lightgrey',
        },
        title: {
          display: false
        },
        suggestedMin: 11,
        suggestedMax: 10
      },
      
      
    }
  }

const DoughnutChart = () => (
  <>
    <Doughnut id="width100" data={data} options={options} />
  </>
);

export default DoughnutChart;