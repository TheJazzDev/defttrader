import Image from 'next/image';
import casi from '../../assets/aboutus/casi.jpg';
import tope from '../../assets/aboutus/tope.jpg';
import taiwo from '../../assets/aboutus/taiwo2.png';

const ThirdSection = () => {
  return (
    <section className='px-4'>
      <div className='mb-24'>
        <h2 className='text-primaryColor text-2xl font-semibold max-w-md mx-auto text-center'>
          MEET THE TEAM
        </h2>
        <p className='text-paragraph text-sm mx-auto max-w-2xl text-center mt-2'>
          We’ve built a world class team with expertise in various disciplines
          to build DEFT Trader into a sustainable and successful company.
        </p>
        <div className='flex gap-8 md:gap-24 flex-wrap justify-center mt-16'>
          {[
            [
              casi,
              'Casi Henry Raymond',
              'Founder, Scalping & Day Trading Expert',
            ],
            [tope, 'Olukotun Tope', 'Swing Trader & Forecast Master'],
            [taiwo, 'Taiwo Babarinde', 'Robot/Web Developer'],
          ].map(([image, bearerName, title]) => (
            <div
              key={bearerName}
              className='flex flex-col items-center justify-center border border-primaryColor py-8 px-4 rounded-xl w-full sm:w-72'>
              <Image
                src={image}
                alt={bearerName}
                priority
                width='auto'
                height='auto'
                className='w-40 rounded-full border border-primaryColor'
              />
              <h4 className='text-lg text-heading font-semibold mt-8'>
                {bearerName}
              </h4>
              <p className='text-paragraph text-xs'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
