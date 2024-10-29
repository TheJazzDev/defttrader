import Head from 'next/head';
import Mentorship from '../../components/Mentorship/Mentorship';

const index = () => {
  return (
    <>
      <Head>
        <title>Deft Trader - Mentorship</title>
        <meta
          name='keywords'
          content='Mentorship, fx mentorship, forex mentorship, ict mentorship'
        />
      </Head>
      <Mentorship />;
    </>
  );
};

export default index;
