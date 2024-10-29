import { useState } from 'react';
import useLineBarDataset from '../../../hooks/useLineBarDataset';
import LineBarChart from './LineBarChart';

const SelectChart = ({ data }) => {
  const { balance, profit } = useLineBarDataset(data);

  const [activeChart, setActiveChart] = useState('balance');

  function handleChartSelect(button) {
    setActiveChart(button);
  }

  let chart;

  if (activeChart === 'balance') {
    chart = <LineBarChart chartData={balance} />;
  } else if (activeChart === 'profit') {
    chart = <LineBarChart chartData={profit} />;
  }

  return (
    <div id='charts' className='flex-1 shadow-md'>
      <div className='flex items-center justify-between w-full bg-[#bfbfbf]'>
        <div className=''>
          <span className='inline-block px-4 font-semibold'>Chart</span>
          {[
            ['Balance', 'balance'],
            ['Profit', 'profit'],
          ].map(([title, id]) => (
            <button
              key={id}
              onClick={() => handleChartSelect(id)}
              className={`text-xs text-black cursor-pointer py-1 mt-3 px-2 smooth ${
                activeChart === id ? 'bg-white' : 'bg-[#a9a9a9]'
              }`}>
              {title}
            </button>
          ))}
        </div>
      </div>
      <div className='border-r border-l border-b mt-2 h-80 md:h-96'>
        {chart}
      </div>
    </div>
  );
};

export default SelectChart;
