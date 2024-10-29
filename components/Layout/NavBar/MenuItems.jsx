import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import gsap from 'gsap';
import { navMenus } from './NavMenus';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const MenuItems = () => {
  const { pathname } = useRouter();
  const [menuHoverStates, setMenuHoverStates] = useState({});
  const menuItems = useRef();
  const ctx = useRef();

  function handleMouseEnter(menuId) {
    setMenuHoverStates((prevState) => {
      const newState = { ...prevState };
      newState[menuId] = true;
      return newState;
    });
    //ctx.current.onEnter(menuId);
  }

  function handleMouseLeave(menuId) {
    setMenuHoverStates((prevState) => {
      const newState = { ...prevState };
      newState[menuId] = false;
      return newState;
    });
    //ctx.current.onLeave(menuId);
  }

  useIsomorphicLayoutEffect(() => {
    ctx.current = gsap.context((self) => {
      self.add('onEnter', (e) => {
        gsap.to('.navArrow1', { rotate: -180, duration: 0.2 });
      });
      self.add('onLeave', (e) => {
        gsap.to('.navArrow1', { rotate: 0, duration: 0.2 });
      });
    }, menuItems);

    return () => ctx.current.revert();
  }, []);

  return pathname === '/' ? (
    <span className='hidden navItems' />
  ) : (
    <div ref={menuItems}>
      <ul className='hidden text-heading lg:flex gap-x-8 text-sm cursor-pointer'>
        {navMenus.map(({ id, title, href, icon, subMenu }) => {
          const isActive =
            href === pathname ||
            (subMenu && subMenu.some((item) => pathname.startsWith(item.href)));

          return (
            <li
              key={id}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={() => handleMouseLeave(id)}
              className={`${
                isActive
                  ? 'text-primaryColor before:absolute before:content-[""] before:w-full before:h-1 before:-mt-7 before:top-full before:bg-primaryColor before:transition-all before:duration-500 before:ease-in-out'
                  : ''
              } h-full relative after:absolute after:content-[""] after:w-1/2 after:h-1 after:-mt-7 after:top-full after:left-0 after:bg-primaryColor after:transition after:duration-500 after:scale-0 after:origin-right hover:after:origin-left after:hover:scale-100 navItems`}>
              <Link href={href} className='py-7 block hover:text-primaryColor '>
                <div className='flex items-center gap-1'>
                  {title}
                  {icon}
                </div>
              </Link>
              {menuHoverStates[id] && subMenu && (
                <ul className='absolute top-[5.23rem] -right-16 bg-[#c7fbdf] rounded-lg transition-all duration-500 ease-in-out'>
                  {subMenu?.map((subMenuItem) => (
                    <Link
                      key={subMenuItem?.id}
                      href={subMenuItem.href}
                      className='block py-2 px-4 m-1 w-52 text-paragraph font-semibold rounded-lg hover:text-secondaryColor hover:bg-[#73ffb4] transition-all duration-500 ease-in-out'>
                      {subMenuItem?.title}
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItems;
