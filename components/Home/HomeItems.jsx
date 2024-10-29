import Knowledge from '../../assets/dashboard/trading.svg';
import Robot from '../../assets/dashboard/robot-trading.svg';
import Mentor from '../../assets/dashboard/mentorship.svg';
import AboutUs from '../../assets/dashboard/about-us.svg';
import Policy from '../../assets/dashboard/policy.svg';
import ContactUs from '../../assets/dashboard/contact-us.svg';
import Disclaimer from '../../assets/dashboard/disclaimer.svg';
import Partnership from '../../assets/dashboard/partnership.svg';

let HomeItems = [
  {
    href: '/knowledge-hub',
    title: 'Knowldege Hub',
    class:
      'flex-col md:flex-row lg:flex-col col-span-2 lg:col-span-1 lg:row-span-3 bg-secondaryColor text-base',
    icon: (
      <Knowledge className='w-36 h-36 lg:w-60 lg:h-60 xl:w-72 xl:h-72 icon' />
    ),
  },
  {
    href: '/trade-with-our-robot',
    title: 'Trade with our Robot',
    class: 'flex-col lg:row-span-2 bg-primaryColor text-base',
    icon: <Robot className='w-36 h-36 lg:w-48 lg:h-48 icon' />,
  },
  {
    href: '/mentorship',
    title: 'Mentorship',
    class:
      'flex-col lg:row-span-2 bg-secondaryColor md:bg-secondaryColor text-base',
    icon: <Mentor className='w-36 h-36 lg:w-48 lg:h-48 icon' />,
  },
  {
    href: '/about-us',
    title: 'About Us',
    class:
      'flex-col lg:row-span-3 bg-secondaryColor md:bg-primaryColor text-base',
    icon: (
      <AboutUs className='w-36 h-36 lg:w-60 lg:h-60 xl:w-72 xl:h-72 icon' />
    ),
  },
  {
    href: '/our-partner-brokers',
    title: 'Our Partner Brokers',
    class:
      'flex-col lg:row-span-2 bg-primaryColor md:bg-secondaryColor text-base',
    icon: <Partnership className='w-32 h-36 lg:w-48 lg:h-48 icon' />,
  },
  {
    href: '/contact-us',
    title: 'Contact Us',
    class: 'flex-col lg:row-span-2 bg-primaryColor text-base',
    icon: <ContactUs className='w-32 h-36 lg:w-48 lg:h-48 icon' />,
  },
  {
    href: '/privacy-policy',
    title: 'Privacy Policy',
    class:
      'flex-col lg:flex-row-reverse bg-secondaryColor lg:bg-primaryColor lg:text-[1rem] xl:text-base',
    icon: (
      <Policy className='w-36 h-36 md:w-32 md:h-32 lg:w-24 lg:h-28 xl:w-32 xl:h-32 icon' />
    ),
  },
  {
    href: '/disclaimer',
    title: 'Disclaimer',
    class:
      'flex-col lg:flex-row-reverse col-span-2 md:col-span-1 bg-primaryColor lg:bg-secondaryColor text-base',
    icon: <Disclaimer className='w-36 h-36 md:w-32 md:h-32 icon' />,
  },
];

export default HomeItems;
