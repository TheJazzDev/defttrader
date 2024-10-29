import React, { useState, useEffect } from 'react';

import Logo from '../components/Layout/Logo';

let d;
let h;
let m;
let s;

const useCountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    const target = new Date('2023-02-15 8:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setLaunch(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  const countDown = (
    <div className='flex flex-col items-center justify-center h-screen gap-8 text-center px-4'>
      <span className='w-32'>
        <Logo />
      </span>
      <div className='text-3xl mb-6'>Website Will Be Live In</div>
      <div className='flex justify-center gap-6 basis-10 flex-wrap'>
        {[
          [+days, 'DAYS'],
          [+hours, 'HOURS'],
          [+minutes, 'MINS'],
          [+seconds, 'SECS'],
        ].map(([value, label]) => (
          <div
            key={label}
            className='rounded-3xl bg-primaryColor py-4 w-24 md:w-32'>
            <div className='text-5xl text-white font-bold mb-2'>
              {format(value)}
            </div>
            <span className='text-white text-xs'>{label}</span>
          </div>
        ))}
      </div>
      <p className='mt-8 font-semibold'>Deft Trader Team are Working...</p>
    </div>
  );

  return { countDown, launch };
};

export default useCountDown;
