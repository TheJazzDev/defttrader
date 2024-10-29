import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import trading from '../../assets/mentorship/trading.png';
import trading2 from '../../assets/mentorship/trading2.png';
import trading3 from '../../assets/mentorship/trading3.png';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const SecondSection = () => {
  const sectionTwo = useRef();
  const tl = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.set('#animate', { opacity: 1 });
    let ctx;

    ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0 },
          scrollTrigger: {
            trigger: '#section',
            animation: tl.current,
            start: 'top 0',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
            scrub: 2,
            pin: true,
            pinSpacing: true,
          },
        })
        .from('#section #p-1', { x: -400, duration: 10, ease: 'circ.out' })
        .from(
          '#section #img-1',
          { x: 400, duration: 10, ease: 'circ.out' },
          '<'
        )
        .to('#section #p-1', { x: -400, duration: 10, ease: 'circ.in' }, '+=2')
        .to('#section #img-1', { x: 400, duration: 10, ease: 'circ.in' }, '<')
        .from(
          '#section #p-2',
          { x: 400, duration: 10, ease: 'circ.out' },
          '+=2'
        )
        .from(
          '#section #img-2',
          { x: -400, duration: 10, ease: 'circ.out' },
          '<'
        )
        .to('#section #p-2', { x: 400, duration: 10, ease: 'circ.in' }, '+=2')
        .to('#section #img-2', { x: -400, duration: 10, ease: 'circ.in' }, '<')
        .from(
          '#section #p-3',
          { x: -400, duration: 10, ease: 'circ.out' },
          '+=2'
        )
        .from(
          '#section #img-3',
          { x: 400, duration: 10, ease: 'circ.out' },
          '<'
        );
    }, sectionTwo);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionTwo}>
      <div id='section' className='overflow-hidden mb-12 lg:mt-24'>
        <h3 className='text-primaryColor text-xl lg:text-2xl font-semibold text-center mx-auto max-w-2xl mt-16 lg:mt-28'>
          WHAT DOES DEFT TRADER TEACHES IN HIS MENTORSHIP COURSE?
        </h3>
        <p className='text-paragraph text-sm max-w-5xl my-4 text-center'>
          The Mentorship course teaches the 3 strategies we use to trade:
        </p>
        <div id='animate' className='opacity-0 grid lg:mt-12'>
          <div className='flex flex-col lg:flex-row items-center lg:justify-around gap-4'>
            <p
              id='p-1'
              className='text-paragraph text-sm max-w-xl text-justify mb-4'>
              The First is a swing trading strategy we use across Forex, Equity
              Indices and Commodities. This strategy can also be applied to the
              Crypto market.
            </p>
            <Image
              src={trading}
              priority
              alt='Swing Trading'
              id='img-1'
              className='w-80 h-80 md:w-96 md:h-96 tall:w-60 tall:h-60'
            />
          </div>
          <div className='flex flex-col lg:flex-row items-center lg:justify-around'>
            <Image
              src={trading2}
              priority
              alt='Swing Trading'
              id='img-2'
              className='w-80 h-80 md:w-[30rem] md:h-[26rem] tall:w-60 tall:h-60'
            />
            <p
              id='p-2'
              className='text-paragraph text-sm max-w-xl text-justify'>
              The Second is a day trading strategy that was developed by one of
              our Team Members. And we use this to trade the synthetic indices
              offered on Deriv previously called Binary.
            </p>
          </div>
          <div className='flex flex-col lg:flex-row items-center lg:justify-around gap-6 tall:gap-0 md:gap-0'>
            <p
              id='p-3'
              className='text-paragraph text-sm max-w-xl  text-justify'>
              The Third is a Scalping strategy which we developed in the 2nd
              Quarter of 2022 and was integrated into a robot. You can check the
              performance of this strategy here on the{' '}
              <span className='text-blue-500 underline'>
                <Link href='trade-with-our-robot'>
                  Trade with our Robot Page
                </Link>
              </span>
              .
            </p>
            <Image
              src={trading3}
              priority
              alt='Swing Trading'
              id='img-3'
              className='md:w-[30rem] md:h-96 tall:w-[25rem] tall:h-60'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
