import { useState } from 'react';
import Mobile from './Mobile';
import Logo from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MenuItems from './MenuItems';
import Social from './Social';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    showMenu && setActive(true);
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className='fixed h-fit top-0 flex items-center justify-between px-6 lg:px-12 xl:px-32 py-2 lg:py-0 bg-light/70 backdrop-blur-xl w-screen z-20 border-b border-primaryColor/50'>
      <span className='w-12 h-12 md:w-16 md:h-16 logo lg:my-2'>
        <Logo />
      </span>
      <MenuItems />
      {!active && (
        <FontAwesomeIcon
          icon={faBars}
          onClick={toggleMenu}
          className='w-8 h-8 text-paragraph lg:hidden'
        />
      )}

      {active && (
        <Mobile
          showMenu={showMenu}
          setActive={setActive}
          toggleMenu={toggleMenu}
        />
      )}
      <Social className='icons' />
    </nav>
  );
};

export default NavBar;
