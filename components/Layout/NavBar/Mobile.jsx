import { useRef, useLayoutEffect, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import NavItems from '../../Home/HomeItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {
  faTelegram,
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../Logo';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Mobile = ({ setActive, toggleMenu, showMenu }) => {
  const animate = useRef();
  const ctx = useRef();
  const tl = useRef();

  useIsomorphicLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      tl.current = gsap
        .timeline({
          onReverseComplete() {
            setActive(false);
          },
        })
        .from('.navAnimate', { xPercent: 100, duration: 0.3 })
        .from(
          '.mobile-items',
          { x: 200, duration: 0.3, opacity: 0, stagger: 0.08 },
          '-=0.2'
        )
        .from(
          '.navAnimate li',
          {
            duration: 0.3,
            opacity: 0,
            scale: 0,
            stagger: { amount: 0.2, from: 'start' },
            transformOrigin: '50% 50%',
          },
          '-=0.4'
        )
        .from(
          '.navAnimate p',
          { y: 100, ease: 'back', duration: 0.4, opacity: 0 },
          '-=0.2'
        )
        .reverse();
    }, animate);

    return () => ctx.current.revert();
  }, [setActive]);

  useEffect(() => {
    tl.current.reversed(!tl.current.reversed());
  }, [showMenu]);

  return (
    <>
      <section ref={animate} className='absolute top-0 right-0 w-4/5 z-40'>
        <div className='navAnimate h-screen flex items-center flex-col justify-around bg-light/80 backdrop-blur-3xl z-20 p-6 lg:hidden rounded-tl-3xl rounded-bl-3xl border-primaryColor border-l'>
          <span onClick={toggleMenu} className='absolute top-3 w-12 h-12'>
            <Logo />
          </span>
          <FontAwesomeIcon
            icon={faClose}
            onClick={toggleMenu}
            className='w-8 h-8 text-paragraph absolute top-4 right-5 md:right-7'
          />
          <div className='flex flex-col items-center text-lg font-extralight'>
            {NavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={toggleMenu}
                className='text-paragraph py-2 w-full text-center mobile-items'>
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <ul className='flex text-center items-center justify-center gap-8'>
              {[
                ['https://twitter.com/defttraders', faTwitter],
                ['https://instagram.com/defttraders', faInstagram],
                ['https://t.me/defttrader', faTelegram],
                ['https://www.facebook.com/defttraders', faFacebook],
              ].map(([url, icon]) => (
                <li key={url} onClick={toggleMenu}>
                  <a href={url} target='blank' rel='noreferrer'>
                    <FontAwesomeIcon
                      icon={icon}
                      className='w-6 md:w-8 text-primaryColor'
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className='text-paragraph text-xs md:text-sm font-extralight text-center max-w-xs md:max-w-sm mt-4'>
              Connect with us via our social media handles
            </p>
          </div>
        </div>
      </section>
      <div className='absolute top-0 bottom-0 right-0 left-0 bg-light/70 w-screen h-screen'></div>
    </>
  );
};

export default Mobile;
