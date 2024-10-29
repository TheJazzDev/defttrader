import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Heading from '../../utils/Heading';
import Paragraph from '../../utils/Paragraph';
import ListItem from '../../utils/ListItem';
import headingsArray from './headingsArray';
import paragraphsArray from './paragraphsArray';
import {
  collectingInfo,
  usingInfo,
  disclosingInfo,
  retainingInfo,
} from './listArray';
import Anchor from '../../utils/Anchor';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const PrivacyPolicy = () => {
  const privacy = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { duration: 1, opacity: 0, ease: 'back' },
        })
        .from('h1', { y: -100, delay: 1 })
        .from('#content', { opacity: 0 }, '-=0.4');
    }, privacy);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={privacy}>
      <div className='flex flex-col items-center justify-center h-full w-full pt-24 lg:pt-32 px-4 lg:px-12'>
        <h1 className='text-primaryColor text-2xl lg:text-3xl font-semibold text-center mb-8 leading-loose tracking-wide'>
          PRIVACY POLICY
        </h1>
        <div id='content' className='max-w-5xl'>
          <Heading item={headingsArray[0].intro} />
          <Paragraph item={paragraphsArray[0].intro} />
          <br />
          <Heading item={headingsArray[1].collectingInfo} />
          <Paragraph item={paragraphsArray[1].collectingInfo} />
          <ListItem items={collectingInfo} />
          <br />
          <Heading item={headingsArray[2].usingInfo} />
          <Paragraph item={paragraphsArray[2].usingInfo[0]} />
          <ListItem items={usingInfo} />
          <Paragraph item={paragraphsArray[2].usingInfo[1]} />
          <br />
          <Heading item={headingsArray[3].disclosingInfo} />
          <Paragraph item={paragraphsArray[3].disclosingInfo[0]} />
          <Paragraph item={paragraphsArray[3].disclosingInfo[1]} />
          <ListItem items={disclosingInfo} />
          <Paragraph item={paragraphsArray[3].disclosingInfo[2]} />
          <br />
          <Heading item={headingsArray[4].retainingInfo} />
          <Paragraph item={paragraphsArray[4].retainingInfo[0]} />
          <Paragraph item={paragraphsArray[4].retainingInfo[1]} />
          <Paragraph item={paragraphsArray[4].retainingInfo[2]} />
          <ListItem items={retainingInfo} />
          <Paragraph item={paragraphsArray[4].retainingInfo[3]} />
          <br />
          <Heading item={headingsArray[5].securityInfo} />
          <Paragraph item={paragraphsArray[5].securityInfo[0]} />
          <Paragraph item={paragraphsArray[5].securityInfo[1]} />
          <br />
          <Heading item={headingsArray[6].amendments} />
          <Paragraph item={paragraphsArray[6].amendments[0]} />
          <Paragraph item={paragraphsArray[6].amendments[1]} />
          <br />
          <Heading item={headingsArray[7].yourRights} />
          <Paragraph item={paragraphsArray[7].yourRights[0]} />
          <p className='text-paragraph text-sm mb-2 text-justify'>
            You may instruct us at any time not to process your personal
            information for marketing purposes. To do so please email us at{' '}
            <Anchor
              text='defttraderfx@gmail.com'
              link='mailto:defttraderfx@gmail.com'
            />
          </p>
          <Paragraph item={paragraphsArray[7].yourRights[1]} />
          <br />
          <Heading item={headingsArray[8].thirdParty} />
          <Paragraph item={paragraphsArray[8].thirdParty} />
          <br />
          <Heading item={headingsArray[9].updateInfo} />
          <p className='text-paragraph text-sm mb-2 text-justify'>
            Please let us know if the personal information that we hold about
            you needs to be corrected or updated. You can do this by emailing us
            at{' '}
            <Anchor
              text='defttraderfx@gmail.com'
              link='mailto:defttraderfx@gmail.com'
            />
          </p>
          <Heading item={headingsArray[11].cookies} />
          <Paragraph item={paragraphsArray[9].cookies[0]} />
          <Paragraph item={paragraphsArray[9].cookies[1]} />
          <Paragraph item={paragraphsArray[9].cookies[2]} />
          <Paragraph item={paragraphsArray[9].cookies[3]} />
          <Paragraph item={paragraphsArray[9].cookies[4]} />
          <br />
          <Heading item={headingsArray[11].ourDetails} />
          <Paragraph item={paragraphsArray[10].ourDetails} />
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
