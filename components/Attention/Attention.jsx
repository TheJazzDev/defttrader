import React, { useEffect, useState } from 'react';
import Anchor from '../../utils/Anchor';

const Attention = () => {
  const [visible, setVisible] = useState();

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('modalShown');

    if (!hasModalBeenShown) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 2000);

      localStorage.setItem('modalShown', 'true');
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    visible && (
      <>
        <div className='backdrop' />
        <div className='modal-overlay overflow-y-scroll table_scroll w-[93%] md:w-[80%] lg:w-[40%]'>
          <div className='p-4 flex flex-col'>
            <h3 className='text-primaryColor text-2xl lg:text-3xl font-semibold text-center mx-auto max-w-4xl mb-6 leading-loose tracking-wide'>
              Attention!!!
            </h3>

            <p className='text-paragraph max-w-5xl text-justify mb-6'>
              We have recently become aware that some entities are using our brand name
              and logo to scam people online. They are sending unsolicited
              emails, messages, and calls to potential victims, claiming to
              offer guaranteed returns or bonuses if they invest with them. They
              are also asking for personal or financial information, such as
              bank account details, passwords, or verification codes.{' '}
            </p>

            <p className='text-paragraph max-w-5xl text-justify mb-6'>
              This is a fraudulent activity and WE WILL NEVER ASK YOU TO SEND US
              MONEY for Investments and we are not affiliated with or endorse
              such person or scheme in any way. We are not responsible for any
              damages or losses that may result from engaging with such scam.{' '}
            </p>

            <p className='text-paragraph max-w-5xl text-justify mb-6 mx-auto'>
              Please be careful and do not share any personal or financial
              information with anyone claiming to be us or representing us. If
              you encounter this scam, please contact us immediately at{' '}
              <Anchor
                text='defttraderfx@gmail.com'
                link='mailto:defttraderfx@gmail.com'
              />
              . You can also verify our identity and legitimacy by visiting our
              official <Anchor text='Website' link='https://defttrader.com/' />{' '}
              and follow our official social media accounts on{' '}
              <Anchor
                text='FaceBook'
                link='https://www.facebook.com/defttraders'
              />
              ,{' '}
              <Anchor
                text='Instagram'
                link='https://www.instagram.com/defttraders'
              />{' '}
              and{' '}
              <Anchor text='Twitter' link='https://twitter.com/defttraders' />.
              Thank you for your trust and support.
            </p>

            <p className='text-paragraph max-w-5xl text-justify mb-6'>
              Please click &quot;I Agree&quot; to acknowledge this disclaimer
              and continue to our site.
            </p>
            <button
              className='bg-primaryColor text-white text-base font-semibold py-2 px-6 rounded-lg mx-auto'
              onClick={() => setVisible(false)}>
              I Agree
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default Attention;
