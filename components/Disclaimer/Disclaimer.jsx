import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Heading from '../../utils/Heading';
import Paragraph from '../../utils/Paragraph';
import headingsArray from './headingsArray';
import paragraphsArray from './paragraphsArray';
import Anchor from '../../utils/Anchor';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const Disclaimer = () => {
  const disclaimer = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { duration: 1, opacity: 0, ease: 'back' },
        })
        .from('h1', { y: -100, delay: 1 })
        .from('#content', { opacity: 0 }, '-=0.4');
    }, disclaimer);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={disclaimer}>
      <div className='flex flex-col items-center justify-center h-full w-full pt-24 lg:pt-32 px-4 lg:px-12'>
        <h1 className='text-primaryColor text-xl lg:text-3xl font-semibold text-center max-w-2xl lg:max-w-3xl mb-2 leading-loose tracking-wide'>
          RISK WARNING, DISCLOSURE AND DISCLAIMER STATEMENT
        </h1>
        <div id='content' className='max-w-5xl'>
          <Heading item={headingsArray[0].risks} />
          <Paragraph item={paragraphsArray[0].risks} />
          <br />
          <Heading item={headingsArray[1].disclosure} />
          <Paragraph item={paragraphsArray[1].disclosure[0]} />
          <Paragraph item={paragraphsArray[1].disclosure[1]} />
          <br />
          <Heading item={headingsArray[2].disclaimer} />
          <Paragraph item={paragraphsArray[2].disclaimer[0]} />
          <Paragraph item={paragraphsArray[2].disclaimer[1]} />
          <Paragraph item={paragraphsArray[2].disclaimer[0]} />
          <Paragraph item={paragraphsArray[2].disclaimer[1]} />
          <br />
          <Heading item={headingsArray[3].terms} />
          <Paragraph item={paragraphsArray[3].terms} />
          <br />
          <Heading item={headingsArray[4].warranties} />
          <Paragraph item={paragraphsArray[4].warranties[0]} />
          <Paragraph item={paragraphsArray[4].warranties[1]} />
          <Paragraph item={paragraphsArray[4].warranties[2]} />
          <Paragraph item={paragraphsArray[4].warranties[3]} />
          <Paragraph item={paragraphsArray[4].warranties[4]} />
          <Paragraph item={paragraphsArray[4].warranties[5]} />
          <br />
          <Heading item={headingsArray[5].limitations} />
          <Paragraph item={paragraphsArray[5].limitations} />
          <br />
          <Heading item={headingsArray[6].indemnification} />
          <Paragraph item={paragraphsArray[6].indemnification} />
          <br />
          <Heading item={headingsArray[7].allocation} />
          <Paragraph item={paragraphsArray[7].allocation} />
          <br />
          <Heading item={headingsArray[8].copyright} />
          <Paragraph item={paragraphsArray[8].copyright[0]} />
          <Paragraph item={paragraphsArray[8].copyright[1]} />
          <br />
          <Heading item={headingsArray[9].distribution} />
          <Paragraph item={paragraphsArray[9].distribution} />
          <br />
          <Heading item={headingsArray[10].links} />
          <Paragraph item={paragraphsArray[10].links} />
          <br />
          <Heading item={headingsArray[11].refund} />
          <Paragraph item={paragraphsArray[11].refund} />
          <br />
          <Heading item={headingsArray[12].general} />
          <Paragraph item={paragraphsArray[12].general[0]} />
          <Paragraph item={paragraphsArray[12].general[1]} />
          <p className='text-paragraph text-sm mb-4 text-justify'>
            If you have any questions or are in any doubt, please contact us at{' '}
            <Anchor
              text='defttraderfx@gmail.com'
              link='mailto:defttraderfx@gmail.com'
            />{' '}
            prior to entering the webinar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
