import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const Mentorship = () => {
  return (
    <div className='flex items-center justify-center h-full w-full pt-24 lg:pt-32 px-4 lg:px-12'>
      <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </div>
  );
};

export default Mentorship;
