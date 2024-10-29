import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Social = ({ showMenu, className, id }) => {
  return (
    <ul
      className={`${
        showMenu ? 'flex' : 'hidden'
      } lg:flex text-center items-center justify-center gap-8 md:gap-4`}>
      {[
        ['https://twitter.com/defttraders', faTwitter, 'Twitter'],
        ['https://instagram.com/defttraders', faInstagram, 'Instagram'],
        ['https://t.me/defttrader', faTelegram, 'Telegram'],
        ['https://www.facebook.com/defttraders', faFacebook, 'Facebook'],
      ].map(([url, icon, toolTip]) => (
        <li key={url} className={className} id={id}>
          <a href={url} target='blank' rel='noreferrer' title={toolTip}>
            <FontAwesomeIcon
              icon={icon}
              className='w-7 md:w-5 text-primaryColor hover:text-[#035027]'
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
