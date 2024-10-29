import Head from 'next/head';
import Dashboard from '../components/Home/Dashboard';
import Attention from '../components/Attention/Attention';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    
  })
  return (
    <>
      <Head>
        <title>Deft Trader - Dashboard</title>
        <meta
          name='keywords'
          content='Deft Trader, FX trader, Forex Trader, fx meaning, investors'
        />
      </Head>
      <Dashboard />
      <Attention />
    </>
  );
}
