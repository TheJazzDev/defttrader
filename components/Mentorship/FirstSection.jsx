import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import business from '../../assets/mentorship/stock.png';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const FirstSection = () => {
  const sectionOne = useRef();
  const tl = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx;

    ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 1, ease: 'back' },
        })
        .from('#section h1', { y: -100, delay: 1 })
        .from('#section p', { x: -100, stagger: 0.2 }, '-=0.3')
        .from('.trading_image', { opacity: 0, duration: 2 }, '-=0.3');
    }, sectionOne);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionOne}>
      <div id='section' className='text-sm'>
        <h1 className='text-primaryColor text-2xl lg:text-3xl font-semibold text-center mx-auto max-w-4xl mb-6 leading-loose tracking-wide'>
          FORGET EVERYTHING YOU KNOW ABOUT TRADING
        </h1>
        <p className='text-paragraph max-w-5xl text-justify mb-6 mx-auto'>
          If you are reading this, it’s because you are either completely new to
          the financial markets or have found that something in your existing
          trading is not working. If something isn’t working, there’s only one
          way to make sure it does.
        </p>
        <p className='text-paragraph max-w-5xl text-justify mb-6 mx-auto'>
          You need to take it completely apart and rebuild it piece by piece.
          Only by doing this, can you make sure that every single aspect of your
          trading is working effectively and that you are performing at your
          optimum level.
        </p>
        <p className='text-paragraph max-w-5xl text-justify mb-20 mx-auto'>
          If you’ve tried but consistently failed to make money or if you’re
          profitable but feel like you could be doing better, then this course
          is designed for you. You’ll receive the skills, the tools, the
          knowledge and the confidence to trade the financial markets.
        </p>
        <Image
          src={business}
          priority
          alt='Trading'
          className='mx-auto w-[50rem] trading_image'
        />
      </div>
    </section>
  );
};

export default FirstSection;
