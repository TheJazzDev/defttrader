import Head from 'next/head';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Deft Trader - Error 404</title>
      </Head>
      <div className='flex flex-col items-center justify-center text-3xl font-bold h-screen'>
        You have visited a page that does not exist!
        <Link href='/'>
          <div className='text-center w-fit mt-12 mx-auto border px-3 py-2 bg-primaryColor rounded-lg text-white text-lg font-semibold'>
            Go Back Home
          </div>
        </Link>
      </div>
    </>
  );
};

export default Custom404;
