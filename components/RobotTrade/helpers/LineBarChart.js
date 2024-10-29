import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
  Filler,
  LineController,
  BarController,
} from 'chart.js';
import { Chart as ChartWrapper } from 'react-chartjs-2';
import { formatChartsNumber, convertNum } from '../../../utils/format';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineController,
  BarController,
  BarElement
);

export const options = {
  responsive: true,
  aspectRatio: 2,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: 'bottom',
    },
  },
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxRotation: 0,
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        callback: function (val, index, ticks) {
          if (val === 0) {
            return val;
          } else if (val === 1) {
            return val + '%';
          } else if (val % 1 !== 0) {
            return val + '%';
          } else if (val.toString().length <= 3) {
            return '$' + formatChartsNumber(val);
          } else {
            return convertNum(val);
          }
        },
      },
      beginAtZero: false,
      position: 'left',
      grid: {
        display: false,
      },
    },
    pips: {
      ticks: {
        display: false,
      },
      beginAtZero: false,
      position: 'right',
      grid: {
        display: false,
      },
    },
  },
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  },
};

const LineBarChart = ({ chartData }) => {
  return <ChartWrapper options={options} data={chartData} />;
};

export default LineBarChart;
