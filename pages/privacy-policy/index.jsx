import Head from 'next/head';
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy';

const index = () => {
  return (
    <>
      <Head>
        <title>Deft Trader - Privacy Policy</title>
      </Head>
      <PrivacyPolicy />
    </>
  );
};

export default index;
