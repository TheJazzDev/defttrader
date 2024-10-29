import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Sending = ({ title }) => {
  return (
    <div className='flex items-center justify-center mt-12 gap-4 text-base font-semibold text-lightMode-100'>
      {title}
      <ThreeDots
        height='60'
        width='60'
        radius='9'
        color='#009444'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClassName=''
        visible={true}
      />
    </div>
  );
};

export default Sending;
