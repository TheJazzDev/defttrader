import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import TestimonialSlider from './Testimonial/Testimonial';
// import ThirdSection from './ThirdSection';

const AboutUs = () => {
  return (
    <div className='pt-24 lg:pt-32'>
      <FirstSection />
      <SecondSection />
      {/* <ThirdSection /> */}
      <TestimonialSlider />
    </div>
  );
};

export default AboutUs;
