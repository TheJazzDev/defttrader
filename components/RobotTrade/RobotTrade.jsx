import { useLayoutEffect, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import useSWR from 'swr';
import Aggressive from './Aggerssive';
import Precision from './Precision';
import CasiScalp from './CasiScalp';
import Anchor from '../../utils/Anchor';
import Link from 'next/link';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const fetcher = (...args) =>
  fetch(...args, { cache: 'no-cache' }).then((res) => res.json());

const sessionId = process.env.NEXT_PUBLIC_MYFXBOOK_SESSION_ID;

const RobotTrade = ({
  precisionData,
  pDoughnutData,
  casiScalpData,
  cDoughnutData,
  aggressiveData,
  aDoughnutData,
}) => {
  const robotTrade = useRef();

  const [activeButton, setActiveButton] = useState('precision');
  const dataArray = [];

  const { data, error } = useSWR(
    `https://www.myfxbook.com/api/get-my-accounts.json?session=${sessionId}`,
    fetcher,
    {
      revalidateOnMount: true,
    }
  );

  if (data) {
    const { accounts, error: dataError } = data;
    accounts.forEach((account) => {
      dataArray.push(account);
    });
  }

  function handleButtonClick(button) {
    setActiveButton(button);
  }

  let item;

  if (activeButton === 'precision') {
    item = (
      <Precision
        accountData={dataArray[0]}
        isLoading={!data}
        error={error}
        precisionData={precisionData}
        pDoughnutData={pDoughnutData}
      />
    );
  } else if (activeButton === 'aggressive') {
    item = (
      <Aggressive
        accountData={dataArray[1]}
        isLoading={!data}
        error={error}
        aggressiveData={aggressiveData}
        aDoughnutData={aDoughnutData}
      />
    );
  } else if (activeButton === 'casiScalp') {
    item = (
      <CasiScalp
        accountData={dataArray[2]}
        isLoading={!data}
        error={error}
        casiScalpData={casiScalpData}
        cDoughnutData={cDoughnutData}
      />
    );
  }

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { opacity: 0, ease: 'back' },
        })
        .from('h1', { y: -100, duration: 1, delay: 1 })
        .from('p', { x: -100, stagger: 0.2, duration: 1 }, '-=0.3')
        .from('#chartTitle', { y: 100, duration: 0.7 }, '-=0.8')
        .from('#chartBody', { y: 100, duration: 0.7 }, '<')
        .from('table', { scale: 0, duration: 0.5, ease: 'none' }, '-=0.2')
        .from('#charts', { scale: 0, duration: 0.5, ease: 'none' }, '-=0.2');
    }, robotTrade);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={robotTrade}>
      <div className='pt-24 lg:pt-32 px-4 lg:px-12'>
        <div className='max-w-5xl mx-auto'>
          <h1 className='text-primaryColor text-2xl lg:text-3xl font-semibold text-center mb-8 leading-loose tracking-wide'>
            TRADE WITH OUR ROBOT
          </h1>
          <p className='my-6 text-center'>
            The data shown on this page are three (3) of our finest creations
            here at Deft Trader. You can use any of these robots for free, check
            out{' '}
            <Link href='/our-partner-brokers' className='text-blue-500'>
              our partner broker page
            </Link>{' '}
            for more details on how to get started...
          </p>
          <p className='mb-6 text-center'>
            The data shown below are live feed from{' '}
            <Anchor text='myfxbook.com' link='https://myfxbook.com' /> and are
            subject to update constantly as trades are being taking by the
            robot.
          </p>
          <div
            id='chartTitle'
            className='flex border-primaryColor border-t-2 border-l-2 border-r-2'>
            {[
              ['Precision Scalper (PS)', 'precision'],
              ['Casi Scalp Strategy (CSS)', 'casiScalp'],
              ['Aggressive Beast Trading (ABT)', 'aggressive'],
            ].map(([title, id]) => (
              <button
                key={id}
                onClick={() => handleButtonClick(id)}
                className={`text-[.8rem] sm:text-xs md:text-sm text-black cursor-pointer px-1 md:px-4 py-1 md:py-3 w-full smooth ${
                  activeButton === id
                    ? 'bg-white border-b border-white hover:bg-[#044d26]'
                    : 'border-x bg-primaryColor/40 hover:bg-green-400'
                }smooth`}>
                {title}
              </button>
            ))}
          </div>
          <div
            id='chartBody'
            className='md:px-4 py-4 bg-white border-l-2 border-r-2 border-b-2 border-primaryColor'>
            {item}
          </div>
          <div className='mt-16'>
            <i className='text-xs'>
              Disclaimer: All information provided here is intended solely for
              informational purposes related to using our robots to trade the
              financial markets and does not serve in any way as a specific
              investment recommendation, business recommendation, investment
              opportunity, analysis, or similar general recommendation regarding
              the trading of investment instruments. The historical results
              and/or track record does not imply that the same or future trading
              records or any promises whatsoever. Trading in financial markets
              is a high-risk activity and it is advised not to risk more than
              one can afford to lose.
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotTrade;
