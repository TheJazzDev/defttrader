import Image from 'next/image';
import Link from 'next/link';
import BrandLogo from '../../assets/logo.png';

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src={BrandLogo}
        priority
        alt='Logo'
        width='auto'
        height='auto'
        className='rounded-full'
      />
    </Link>
  );
};

export default Logo;
