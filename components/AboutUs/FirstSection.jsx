import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import illustration from '../../assets/aboutus/businessman.png';

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const FirstSection = () => {
  const sectionOne = useRef();
  const tl = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.5, ease: 'back' },
        })
        .from('#first h1', { y: -100, delay: 1 })
        .from('#first p', { y: -20 }, '-=0.3')
        .from(
          '#second span',
          {
            duration: 1,
            scale: 0,
            ease: 'back(2)',
            transformOrigin: '50% 50%',
          },
          '-=0.3'
        )
        .from('#second p', { y: 100, x: 100, stagger: 0.2 }, '-=0.5');
    }, sectionOne);

    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionOne} className='overflow-hidden px-4'>
      <div id='first' className='w-fit mx-auto mb-16'>
        <h1 className='text-primaryColor text-2xl lg:text-3xl font-semibold text-center mb-2 leading-loose tracking-wide'>
          ABOUT DEFT TRADERS
        </h1>
        <p className='text-paragraph text-sm mx-auto max-w-md text-center'>
          We are not coders, gurus, analysts, or weekend hobbyists.{' '}
          <strong> We are Forex Traders and Educators</strong>
        </p>
      </div>
      <div
        id='second'
        className='grid md:grid-cols-4 justify-items-center items-center max-w-6xl mx-auto mb-24 gap-12'>
        <span className='col-span-2 row-span-2'>
          <Image
            src={illustration}
            alt='illustration'
            priority
            width='auto'
            height='auto'
            className='w-96 scale-x-[-1]'
          />
        </span>
        {[
          [
            'Deft Trader was founded in the year 2021 by professional traders with over two decades of market experience. We have traded company funds, client funds and more importantly, our own funds. As educators, we have provided training of all types, including group, individual and remote.',
          ],
          [
            'Furthermore, we have backward and forward tested literally thousands of various types of indicators, systems, both manual and automated programs across multiple currencies and through all time frames, from 1-minute scalping charts to extremely long term monthly charts.',
          ],
          [
            'Forex trading is a series of business decisions, Money management, psychology, and technical trading which comprises the three sides of good trading.',
          ],
          [
            'We trade what we see, through a systematic approach which (if done correctly), produces reliable results by making logical decisions in a stress-free manner.',
          ],
        ].map(([text], i) => (
          <p
            key={i}
            className='col-span-2 text-paragraph text-sm py-6 px-4 md:px-12 border border-gray-500 rounded-lg max-w-xl text-center'>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default FirstSection;
