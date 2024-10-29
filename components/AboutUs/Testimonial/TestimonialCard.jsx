import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import TestimonialArray from './TestimonialArray';
import Quote from '../../../assets/testimonial/quote.svg';

const TestimonialCard = TestimonialArray.map((item) => (
  <SwiperSlide
    key={item.id}
    className='text-center bg-white drop-shadow-lg cursor-pointer px-4 md:px-0 rounded-3xl border before:content-[""] after:content-[""] before:absolute after:absolute before:right-0 after:right-0 before:bottom-20 after:bottom-20 before:h-[1.5rem] after:h-[1.8rem] before:w-[1.5rem] after:w-[1.8rem] before:bg-primaryColor after:bg-white after:rounded-br-2xl'>
    <span className='absolute top-14 md:top-10 left-6 md;left-10'>
      {item.rating}
    </span>
    <Quote className='w-12 md:w-20 absolute -top-5 right-10 rotate-180' />
    <p className='text-xs md:text-sm md:px-4 lg:px-6 my-10 mx-auto leading-relaxed mt-24'>
      {item.text}
    </p>
    <div className='flex gap-4 bg-primaryColor py-2 px-6 absolute bottom-0 right-0 left-0 rounded-br-3xl rounded-bl-3xl rounded-tl-3xl'>
      <Image
        className='w-16 rounded-full my-auto border-[.2rem] border-white bg-transparent'
        src={item.avatar}
        alt={item.avatar}
        width='auto'
        height='auto'
      />
      <div className='text-left text-white my-auto'>
        <h2 className='text-xs md:text-base font-semibold'>{item.name}</h2>
        <p className='text-[12px] italic'>{item.title}</p>
      </div>
    </div>
  </SwiperSlide>
));

export default TestimonialCard