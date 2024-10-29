import React from 'react';

const ListItem = (props) => {
  return (
    <ul className='list-disc list-inside'>
      {props.items.map((item, index) => (
        <li
          key={index}
          className='text-paragraph text-sm text-justify mb-2 ml-8'>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
