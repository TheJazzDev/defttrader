import Typewriter from 'typewriter-effect';

const Tagline = () => {
  return (
    <div className='text-lg text-paragraph font-semibold hidden md:block'>
      <Typewriter
        options={{
          loop: false,
          delay: 80,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(800)
            .typeString('Discipline, Experience, Freedom and Tenacity')
            .start();
        }}
      />
    </div>
  );
};

export default Tagline;
