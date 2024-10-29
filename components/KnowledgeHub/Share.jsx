import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedinIn,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Share({ description }) {
  let url;

  if (typeof window !== 'undefined') {
    url = window.location.href;
  }

  return (
    <div>
      <div className='flex flex-col lg:flex-row items-center gap-4'>
        <p className='text-base text-paragraph/90 font-semibold'>Share on:</p>
        <div className='flex gap-2 lg:gap-4'>
          {[
            [
              'Twitter',
              faTwitter,
              `https://twitter.com/intent/tweet?url=${url}&text=${encodeURI(
                description
              )}`,
            ],
            [
              'FaceBook',
              faFacebook,
              `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            ],
            [
              'LindedIn',
              faLinkedinIn,
              `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
            ],
            [
              'Pintrest',
              faPinterest,
              `https://pinterest.com/pin/create/button/?url=${url}&media=&description=${encodeURI(
                description
              )}`,
            ],
            [
              'Email',
              faEnvelope,
              `mailto:?&subject=You+have+to+See+this!&cc=&bcc=&body=Check+out+this+site:${url}\n${encodeURI(
                description
              )}`,
            ],
          ].map(([title, icon, href], index) => (
            <a
              key={index}
              href={href}
              target='_blank'
              rel='noreferrer'
              title={title}
              className='border p-2 md:py-[.6rem] md:px-[.8rem] lg:px-[.9rem] rounded-full bg-primaryColor hover:bg-primaryColor/70 transition-all duration-500 ease-in-out'>
              <FontAwesomeIcon
                icon={icon}
                className='w-5 h-5 lg:w-4 lg:h-4 text-white'
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Share;
