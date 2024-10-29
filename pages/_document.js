import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { useEffect, useState } from 'react';

function MyDocument({ initialProps }) {
  const [props, setProps] = useState(initialProps);

  useEffect(() => {
    async function getInitialProps() {
      const initialProps = await Document.getInitialProps();
      setProps({ ...initialProps });
    }
    getInitialProps();
  }, []);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <Html>
      <Head>
        <meta
          name='description'
          content='Deft Trader is a forex brand that helps forex traders, investors and non forex traders to become profitable in the forex market and earn tangible income.'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>

      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>

      <body>
        <Main />
        <NextScript />
        <Script
          type='text/javascript'
          src='https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
        />
      </body>
    </Html>
  );
}

export default MyDocument;
