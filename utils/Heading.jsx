import React from 'react';

const Heading = (props) => {
  return (
    <h3 className='text-primaryColor text-lg font-semibold underline mb-3'>
      {props.item}
    </h3>
  );
};

export default Heading;
