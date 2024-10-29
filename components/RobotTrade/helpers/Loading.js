export const Loading = () => {
  return (
    <tr className='text-center text-black'>
      <td className='py-4' >
        Loading...
      </td>
    </tr>
  );
}

export const Error = () => {
  return (
    <tr className='text-center text-black'>
      <td className='py-4'>
        Failed to fetch data
      </td>
    </tr>
  );
}

