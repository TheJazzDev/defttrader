const Anchor = (props) => {
  return (
    <a
      className='text-blue-500'
      target='_blank'
      rel='noopener noreferrer'
      href={props.link}>
      {props.text}
    </a>
  );
};

export default Anchor;
