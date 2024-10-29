import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Discipline from '../../assets/aboutus/self-discipline.svg';
import Experience from '../../assets/aboutus/experience.svg';
import Freedom from '../../assets/aboutus/freedom.svg';
import Tenacity from '../../assets/aboutus/office.svg';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const SecondSection = () => {
  const sectionTwo = useRef();
  const tl = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx;

    ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 1, ease: 'back' },
          scrollTrigger: {
            trigger: '#section',
            animation: tl.current,
            start: 'top 60%',
            end: 'bottom 0',
          },
        })
        .from('#section', { y: 100 })
        .from('h2', { y: 100 }, '-=0.6')
        .from(
          '#coreIcons',
          {
            scale: 0,
            transformOrigin: '50% 50%',
          },
          '-=0.2'
        )
        .from('h3', { x: 100 }, '-=0.3')
        .from('p', { x: 100 }, '<');
    }, sectionTwo);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionTwo} className='px-4 overflow-hidden'>
      <div
        id='section'
        className='mb-24 w-full mx-auto bg-[#c7fadf] px-4 py-12 rounded-3xl'>
        <h2 className='text-primaryColor text-2xl font-semibold mb-8 md:mb-16 max-w-md mx-auto text-center'>
          OUR CORE VALUES
        </h2>
        <div className='flex flex-wrap justify-between gap-12 xl:gap-16 max-w-6xl mx-auto'>
          {[
            [
              Discipline,
              'Discipline',
              'Our years of trading has instilled in us great knowledge, hence we trade the market with utmost Discipline.',
            ],
            [
              Experience,
              'Experience',
              'As Traders, we are experienced in the field, and We pay attention to details, reason why we are still here.',
            ],
            [
              Freedom,
              'Freedom',
              'Our Tools and our trading systems makes trading easy for us, hence scaling the markets freely.',
            ],
            [
              Tenacity,
              'Tenacity',
              'We hold on to the idea that everyone can participate in the forex market, hence our tools and resources makes it possible.',
            ],
          ].map(([Icon, title, description]) => (
            <div
              key={title}
              className='flex flex-col lg:flex-row items-center justify-center mx-auto gap-8'>
              <Icon id='coreIcons' className='w-24' />
              <span>
                <h3 className='text-lg text-heading text-center lg:text-left font-semibold'>
                  {title}
                </h3>
                <p className='text-paragraphLight text-center lg:text-left text-sm max-w-xs'>
                  {description}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
