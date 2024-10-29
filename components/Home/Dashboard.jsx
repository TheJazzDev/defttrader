import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import HomeItems from './HomeItems';
import bg from '../../assets/dashboard/background.jpg';
import Image from 'next/image';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Dashboard = () => {
  const dashboard = useRef();
  const tls = useRef([]);

  const mouseHoverHandler = (index) => {
    const tween = tls.current[index];
    //tween.reversed(!tween.reversed());
  };

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      '(min-width: 768px)',
      () => {
        const cards = gsap.utils.toArray('.box');
        cards.forEach((card) => {
          const q = gsap.utils.selector(card);
          const tl = gsap
            .timeline({
              defaults: { duration: 0.5, autoAlpha: 1, ease: 'power1.inOut' },
            })
            .to(q('.box div'), {
              opacity: 1,
              scale: 0.85,
              transformOrigin: 'center center',
            })
            .reverse();
          tls.current.push(tl);
        });
      },
      dashboard
    );

    return () => {
      mm.revert();
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { opacity: 0 },
        })
        .from('.box', {
          y: 100,
          stagger: 0.2,
          ease: 'back(3)',
          duration: 1,
          delay: 0.7,
        })
        .from('.box h2', { duration: 1.5, stagger: 0.2 }, '-=2.2')
        .from(
          '.icon',
          {
            duration: 1.5,
            scale: 0,
            ease: 'back(2)',
            stagger: { amount: 1.5, from: 'start' },
            transformOrigin: '50% 50%',
          },
          '<'
        );
    }, dashboard);

    return () => {
      tls.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <div ref={dashboard}>
      <div className='grid place-items-center w-full h-full md:h-screen pt-24 pb-6 md:pb-0 md:pt-0 px-4 relative overflow-hidden'>
        <Image
          src={bg}
          alt='bg'
          fill
          priority
          rel='preload'
          className='hidden md:block w-full h-full mt-20'
        />
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-12 md:grid-rows-3 lg:grid-rows-4 w-full md:h-[70%] text-white max-w-screen-2xl gap-7 [&>*]:rounded-3xl [&>*]:min-h-fit [&>*]:text-center [&>*]:px-4 [&>*]:py-2 md:[&>*]:py-4 [&>*]:cursor-pointer [&>*]:flex [&>*]:items-center [&>*]:justify-around overflow-hidden py-6'>
          {HomeItems.map((item, index) => (
            <Link
              href={item?.href}
              key={item.title}
              onMouseEnter={() => mouseHoverHandler(index)}
              onMouseLeave={() => mouseHoverHandler(index)}
              className={`${item.class} relative box`}>
              {item.icon}
              <h2>{item.title}</h2>
              <div className='flex items-center justify-center absolute w-full h-full scale-0 bg-dark/60 backdrop-blur-3xl rounded-3xl invisible text-base font-semibold tracking-wide text-white'>
                <p className='click'>Goto &nbsp;</p>
                <p className='title'>{item.title}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
