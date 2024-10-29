import Head from 'next/head';
import React from 'react';
import Contact from '../../components/ContactUs/Contact';

const index = () => {
  return (
    <>
      <Head>
        <title>Deft Trader - Contact Us</title>
      </Head>
      <Contact />;
    </>
  );
};

export default index;
