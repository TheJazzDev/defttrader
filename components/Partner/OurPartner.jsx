import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { partnersArray } from './partnersArray';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const OurPartner = () => {
  const partner = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { opacity: 0, ease: 'back' },
        })
        .from('h1', { y: -100, duration: 1, delay: 1 })
        .from('p', { x: -100, duration: 1 }, '-=0.3')
        .from('table', { y: 100 }, '-=0.5')
        .from('th', { y: -50 })
        .from(
          '#partner_logo',
          {
            scale: 0,
            stagger: 0.2,
            ease: 'back(2)',
            transformOrigin: '50% 50%',
          },
          '-=0.3'
        )
        .from('#partner_name', { y: 100, stagger: 0.2 }, '-=0.7')
        .from('#partner_link', { xPercent: 50, stagger: 0.2 }, '<');
    }, partner);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={partner}>
      <div className='pt-24 lg:pt-32 px-4 overflow-hidden'>
        <h1 className='text-primaryColor text-2xl lg:text-3xl font-semibold text-center mx-auto w-fit mb-8 leading-loose tracking-wide'>
          OUR PARTNER BROKERS
        </h1>
        <p className='text-paragraph text-sm mx-auto text-justify max-w-5xl mb-16'>
          Our trusted and reputable partner brokers are listed below,
          registering with our link, earns you a free three month trading with
          our robot (T&C applies). For more enquiries, reach us by email{' '}
          <a className='text-blue-500' href='mailto:defttraderfx@gmail.com'>
            defttraderfx@gmail.com
          </a>{' '}
          or on our social media handles.
        </p>
        <table className='mx-auto [&>*]:border w-full lg:max-w-5xl bg-[#ffffff] shadow-2xl'>
          <thead>
            <tr className='h-16 text-lg text-white bg-primaryColor'>
              <th className='border-r'>Partners</th>
              <th className=''>Official Website</th>
            </tr>
          </thead>
          <tbody>
            {partnersArray.map(([title, logo, href]) => (
              <tr key={href} className='border'>
                <td className='flex flex-col gap-6 items-center justify-center mx-auto py-8 px-4 sm:px-8 text-sm md:text-base font-semibold border-r'>
                  <a
                    id='partner_logo'
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                      src={logo}
                      alt={logo}
                      priority
                      width='auto'
                      height='auto'
                      className='md:w-60 border-2 rounded-lg cursor-pointer md:hover:scale-110 transition-all ease-in-out duration-500'
                    />
                  </a>
                  <span id='partner_name' className='text-center'>
                    {title}
                  </span>
                </td>
                <td id='partner_link' className='text-center w-1/2 md:w-fit'>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='py-3 px-3 md:px-6 border rounded-lg bg-primaryColor text-xs sm:text-base text-white font-semibold hover:bg-[#024316] transition-all ease-in-out duration-500'>
                    Go To Broker
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OurPartner;
