import { formatChartsDate } from '../utils/format';

const useLineBarDataset = (strategyData) => {
  let balance = {
    labels: strategyData.map((data) => formatChartsDate(data.date)),
    datasets: [
      {
        type: 'line',
        label: 'Balance',
        yAxisID: 'y',
        data: strategyData.map((data) => data.balance.toFixed(2)),
        backgroundColor: '#ffc166',
        borderColor: '#ffc166',
        borderWidth: 2,
        spanGaps: true,
        tension: 0.3,
      },
      {
        type: 'bar',
        yAxisID: 'pips',
        label: 'Pips',
        data: strategyData.map((data) => data.pips),
        backgroundColor: strategyData.map((value) =>
          value.pips < 0 ? 'red' : '#4caf50'
        ),
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  let profit = {
    labels: strategyData.map((data) => formatChartsDate(data.date)),
    datasets: [
      {
        type: 'line',
        label: 'Profit',
        data: strategyData.map((data) => data.profit.toFixed(2)),
        fill: true,
        backgroundColor: '#ffc166',
        borderWidth: 1,
        tension: 0.1,
      },
    ],
  };

  return { balance, profit };
};

export default useLineBarDataset;
