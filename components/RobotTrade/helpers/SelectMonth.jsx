import React from 'react';

const SelectMonth = ({ doughnutData, handleSelectChange, monthlyGain }) => {
  return (
    <div className='flex items-center justify-between w-full border-b bg-[#bfbfbf]'>
      <select
        name='Precision Doughnut'
        onChange={(event) => handleSelectChange(event)}
        className='text-center outline-none my-2 py-1 md:pr-4 mx-2 md:mx-4 rounded-sm bg-white'>
        {doughnutData.map((data) => (
          <option className='text-xs' key={data.title} value={data.title}>
            {data.title}
          </option>
        ))}
      </select>
      <p className='inline-block text-xs font-semibold pr-2 md:pr-8 text-right'>
        Monthly Gain:{' '}
        <span className='text-primaryColor'>{`${monthlyGain}%`}</span>
      </p>
    </div>
  );
};

export default SelectMonth;
