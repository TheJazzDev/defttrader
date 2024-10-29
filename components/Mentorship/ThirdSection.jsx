import { useRef, useEffect, useLayoutEffect } from 'react';
import Script from 'next/script';
import gsap from 'gsap';
import Check from '../../assets/mentorship/check.svg';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const ThirdSection = () => {
  const sectionThree = useRef();
  const tl = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx;

    ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 1, ease: 'back' },
          scrollTrigger: {
            trigger: '#section',
            animation: tl.current,
            start: 'top 50%',
            end: 'bottom 0',
          },
        })
        .from('#section h2', { y: 200 })
        .from('#section p', { x: -100, stagger: 0.2, duration: 1 }, '-=0.2')
        .from('#price_card', { opacity: 0, duration: 2 }, '<');
    }, sectionThree);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionThree}>
      <div id='section'>
        <h2 className='text-primaryColor text-2xl font-semibold text-center mx-auto max-w-3xl mb-6'>
          HOW DOES THE MENTORSHIP COURSE WORK?
        </h2>
        <p className='text-paragraph text-sm max-w-4xl text-justify my-6 mx-auto'>
          Upon joining the Mentorship, you will get access to a one on one
          lesson each day (depending on the student schedules or the time fixed)
          until the course is completed. Every lesson will remain available and
          online, for you to access at any time.
        </p>
        <p className='text-paragraph text-sm max-w-4xl text-justify mb-12 mx-auto'>
          If you feel you need this right now, proceed to payment below;
        </p>
        <div
          id='price_card'
          className='bg-[#ffffff] border-4 border-primaryColor max-w-md mx-auto rounded-xl pb-8 relative flex flex-col items-center justify-center overflow-hidden'>
          <div className='w-full h-56 md:h-72 text-center bg-gradient-to-b from-[#0f2114] to-primaryColor rounded-bl-[220px] rounded-br-[220px] mb-4 md:mb-8 pt-12 md:pt-16'>
            <h1 className='text-xl font-semibold mb-8 text-white'>ENROLL</h1>
            <div className='flex justify-center gap-2 text-white mb-3'>
              <span className='text-xl mt-1'>$</span>
              <h1 className='text-5xl font-bold'>349.99</h1>
            </div>
            <h6 className='text-white text-base tracking-wide'>Lifetime</h6>
          </div>
          <h6 className='text-black text-center mx-auto mb-4 md:mb-6 max-w-xs font-bold'>
            A perfect way to start making profits even during your sleep
          </h6>
          <ul className='max-w-sm mx-auto'>
            {[
              ['Lifetime Access'],
              ['1-1 Teaching and learning sessions'],
              ['Specific exercises accompanying key lessons'],
              ['1-1 review sessions at key points in the course'],
              ['6 Month free account management with our robot (T&C applies)'],
              [
                'Access to a private Telegram group with other beginners and professional traders',
              ],
            ].map((item, i) => (
              <li
                key={i}
                className='text-black text-xs mb-1 font-semibold flex gap-2 px-2'>
                <span>
                  <Check className='w-4 h-5 mt-1' />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className='mt-6 text-center'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='text-white bg-primaryColor px-6 md:px-12 py-4 rounded-full text-base md:text-lg hover:bg-[#024316] transition-all duration-300 ease-in-out'
              href='https://commerce.coinbase.com/checkout/5a3ad69a-8cd3-444e-acc3-f5b9c45b50df'>
              Subscribe Now
            </a>
            <Script src='https://commerce.coinbase.com/v1/checkout.js?version=201807' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
