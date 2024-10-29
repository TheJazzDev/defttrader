import Arrow from '../../../assets/arrow-down.svg';

export const navMenus = [
  { id: 1, title: 'Home', href: '/' },
  {
    id: 2,
    title: 'Services',
    href: '',
    icon: <Arrow className='navArrow1' />,
    subMenu: [
      { id: 1, title: 'Mentorship', href: '/mentorship' },
      { id: 2, title: 'Trade with our Robot', href: '/trade-with-our-robot' },
      { id: 3, title: 'Our Partner Brokers', href: '/our-partner-brokers' },
    ],
  },
  { id: 3, title: 'Knowledge Hub', href: '/knowledge-hub' },
  {
    id: 5,
    title: 'Company',
    href: '',
    icon: <Arrow className='navArrow2' />,
    subMenu: [
      { id: 1, title: 'About Us', href: '/about-us' },
      { id: 2, title: 'Privacy Policy', href: '/privacy-policy' },
      { id: 3, title: 'Disclaimer', href: '/disclaimer' },
    ],
  },
  { id: 6, title: 'Contact Us', href: '/contact-us' },
];
