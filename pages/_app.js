import { AuthProvider } from '../context/AuthContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '../components/Layout/Layout';

import '../styles/globals.css';

gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
