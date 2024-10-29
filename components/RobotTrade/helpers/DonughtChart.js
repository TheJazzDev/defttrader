import React from 'react';
import { Chart as ChartJS, ArcElement, Legend, Title, Tooltip } from 'chart.js';
import { Doughnut as ChartWrapper } from 'react-chartjs-2';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  aspectRatio: 1,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Currencies Popularity',
      color: '#0055ff',
      position: 'bottom',
      align: 'center',
      padding: {
        top: 15,
        bottom: 0,
      },
      font: {
        family: 'Arial',
        size: 12,
        weight: 'bold',
        style: 'italic',
        lineHeight: 2.0,
      },
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 10,
      bottom: 2,
    },
  },
};

const DoughnutChart = ({ chartData }) => {
  return <ChartWrapper options={options} data={chartData} />;
};

export default DoughnutChart;
