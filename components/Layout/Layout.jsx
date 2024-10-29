import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HomeItems from '../Home/HomeItems';
import NavBar from './NavBar/NavBar';
import Toastify from '../../utils/Toastify';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const routes = ['/casidefttrader', '/auth', '/404'];

const Layout = (props) => {
  const { pathname } = useRouter();
  const layoutRef = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx;

    ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.5 },
        })
        .from('#layout', { ease: 'linear', autoAlpha: 0 })
        .from('.logo', { x: 200, rotate: 360, ease: 'back', duration: 1.5 })
        .from('.navItems', { y: -50 }, '<')
        .from('.icons', { xPercent: 100, ease: 'back(3)', stagger: 0.2 }, '<')
        .from('.footer', {
          scale: 0.5,
          transformOrigin: '50% 50%',
        });
    }, layoutRef);

    return () => ctx && ctx.revert();
  }, []);

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <main ref={layoutRef} className='bg-light'>
      <Toastify />
      <div id='layout' className='invisible'>
        {routes.some((route) => pathname.startsWith(route)) ? (
          <span className='hidden logo navItems icons' />
        ) : (
          <NavBar />
        )}

        <section>{props.children}</section>

        {routes.some((route) => pathname.startsWith(route)) ||
        pathname === '/' ? (
          <span className='hidden footer' />
        ) : (
          <footer className='bg-[#013924] px-4 py-4 mx-4 mb-4 mt-16 rounded-xl footer'>
            <div className='flex flex-col items-center text-white mx-auto left-0 right-0 max-w-lg md:max-w-2xl'>
              <div className='flex items-center justify-center flex-wrap gap-x-6 mb-6 font-thin text-xs'>
                {HomeItems.map((item) => (
                  <Link key={item.title} href={item.href}>
                    {item.title}
                  </Link>
                ))}
              </div>
              <p className='text-xs text-center'>
                Copyright 2022 - {getCurrentYear()} - Deft Trader. All rights
                reserved.
              </p>
            </div>
          </footer>
        )}
      </div>
    </main>
  );
};

export default Layout;
