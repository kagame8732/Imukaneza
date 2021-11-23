import React from "react";
import { Line } from 'react-chartjs-2';
const LineChart = () => {
    const datapoints = [2.2,13.6,14.5,15];
    const lineData = {
        labels: ['Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
              label: 'Cubic interpolation (monotone)',
              data: datapoints,
              borderColor:'#5E37FF',
              fill: false,
              cubicInterpolationMode: 'monotone',
              tension: 0.4,
            }
          ]
    }
    const lineOption = {
        options: {
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
          },
        
    }
    return(
        <div>
            <Line id="width100" data={lineData} options={lineOption.options} />
        </div>
    )
};

export default LineChart;