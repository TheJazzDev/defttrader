import { Swiper } from 'swiper/react';
import TestimonialCard from './TestimonialCard';
import swiperConfig from './SwiperConfig';

const Testimonials = () => {
  return (
    <section>
      <div id='testimonials' className='px-1 mx-auto w-full max-w-7xl my-32'>
        <h1 className='py-6 text-primaryColor text-2xl lg:text-3xl font-semibold text-center'>
          WHAT OUR COMMUNITY HAS TO SAY
        </h1>
        <Swiper {...swiperConfig}>{TestimonialCard}</Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
