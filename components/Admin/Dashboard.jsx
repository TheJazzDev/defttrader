import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className='mx-auto max-w-5xl mt-16'>
      <h2 className='text-xl text-center font-semibold my-6 text-secondaryColor'>
        Admin DashBoard
      </h2>
      <Link href='/'>
        <div className='text-center w-fit mt-12 mx-auto border px-3 py-2 bg-primaryColor rounded-lg text-white text-xs font-semibold'>
          Go Back Home
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
