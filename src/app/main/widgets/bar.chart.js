import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
      stack: 'Stack 0',
    },
    {
      label: '# of Green Votes',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 1',
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
        display: true,
        
        grid:{
          display:false,
          drawBorder: false, // <-- this removes y-axis line

          
      },
        title: {
          display: false
        }
      },
      y: {
        display: true,
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

  const BarCharts = () => {
  return( <>
    <Bar id="width100" data={data} options={options} />
  </>
);
}

export default BarCharts;