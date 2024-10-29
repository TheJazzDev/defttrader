import DoughnutChart from './helpers/DonughtChart';
import useDoughnutDataset from '../../hooks/useDoughnutDataset';
import AccountCard from './helpers/AccountCard';
import StatsCard from './helpers/StatsCard';
import SelectMonth from './helpers/SelectMonth';
import SelectChart from './helpers/SelectChart';

const Precision = ({
  accountData,
  isLoading,
  error,
  precisionData,
  pDoughnutData,
}) => {
  const { doughnutDataset, setActiveOption, monthlyGain } =
    useDoughnutDataset(pDoughnutData);

  const handleSelectChange = (event) => {
    setActiveOption(event.target.value);
  };

  return (
    <>
      <div className='text-sm max-w-2xl text-center mx-auto pt-5 pb-10 smooth'>
        This is an AI trading robot built on 3 strategies, we included a
        fundamental news filter as well to be mindful of high impact news when
        there is one.
      </div>
      <div className='flex flex-col gap-6 md:flex-row'>
        <table className='border h-fit w-full md:max-w-[18rem]'>
          <thead>
            <tr className='flex justify-between text-xs px-4 py-2 border-b-2 bg-[#bfbfbf]'>
              <th>9853240</th>
              <th>(USD)</th>
            </tr>
          </thead>
          <AccountCard
            accountData={accountData}
            isLoading={isLoading}
            error={error}
          />
        </table>
        <SelectChart data={precisionData} />
      </div>

      <div className='flex flex-col gap-6 md:flex-row mt-10'>
        <table className='border h-fit w-full md:max-w-[18rem]'>
          <thead>
            <tr className='flex justify-between text-xs px-4 py-2 border-b-2 bg-[#bfbfbf] smooth'>
              <th>Stats (Total)</th>
            </tr>
          </thead>
          <StatsCard
            accountData={accountData}
            isLoading={isLoading}
            error={error}
          />
        </table>
        <div id='charts' className='flex-1'>
          <SelectMonth
            doughnutData={pDoughnutData}
            monthlyGain={monthlyGain}
            handleSelectChange={handleSelectChange}
          />
          <div className='border shadow-md h-96'>
            <DoughnutChart chartData={doughnutDataset} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Precision;
