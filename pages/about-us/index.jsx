import Head from 'next/head';
import AboutUs from '../../components/AboutUs/AboutUs';

const index = () => {
  return (
    <>
      <Head>
        <title>Deft Trader - About Us</title>
      </Head>
      <AboutUs />;
    </>
  );
};

export default index;
