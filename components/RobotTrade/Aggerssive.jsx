import DoughnutChart from './helpers/DonughtChart';
import useDoughnutDataset from '../../hooks/useDoughnutDataset';
AccountCard;
import AccountCard from './helpers/AccountCard';
import StatsCard from './helpers/StatsCard';
import SelectMonth from './helpers/SelectMonth';
import SelectChart from './helpers/SelectChart';

const Aggressive = ({
  accountData,
  isLoading,
  error,
  aggressiveData,
  aDoughnutData,
}) => {
  const { doughnutDataset, setActiveOption, monthlyGain } =
    useDoughnutDataset(aDoughnutData);

  const handleSelectChange = (event) => {
    setActiveOption(event.target.value);
  };

  return (
    <>
      <p className='text-sm max-w-2xl text-center mx-auto pt-5 pb-10 smooth'>
        Robot is designed for aggressive traders who has no fear of loss and a
        defined percentage risk management.
      </p>
      <div className='flex flex-col gap-6 md:flex-row'>
        <table className='border h-fit w-full md:max-w-[18rem]'>
          <thead>
            <tr className='flex justify-between text-xs px-4 py-2 border-b-2 bg-[#bfbfbf]'>
              <th>9924552</th>
              <th>(USD)</th>
            </tr>
          </thead>
          <AccountCard
            accountData={accountData}
            isLoading={isLoading}
            error={error}
          />
        </table>

        <SelectChart data={aggressiveData} />
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
        <div className='flex-1'>
          <SelectMonth
            doughnutData={aDoughnutData}
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

export default Aggressive;
