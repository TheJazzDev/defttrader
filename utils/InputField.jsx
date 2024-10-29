function InputField(props) {
  const { setFormData, id, name, label, ...otherProps } = props;

  return (
    <div className='flex flex-col w-full mx-auto'>
      <label
        htmlFor={id}
        className='text-base text-paragraph font-semibold mb-2'>
        {label}
      </label>
      <input
        {...otherProps}
        className='p-2 mt-2 mb-8 rounded-md outline-none bg-transparent border border-gray-300 placeholder:text-gray-300'
        autoComplete='off'
        onChange={(e) =>
          setFormData((prevState) => ({
            ...prevState,
            [name]: e.target.value,
          }))
        }
      />
    </div>
  );
}

export default InputField;
