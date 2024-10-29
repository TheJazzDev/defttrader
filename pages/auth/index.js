import Head from 'next/head';
import React from 'react';
import SignIn from '../../components/Auth/SignIn';

const index = () => {
  return (
    <>
      <Head>
        <title>Deft Trader - Auth</title>
      </Head>
      <SignIn />
    </>
  );
};

export default index;
