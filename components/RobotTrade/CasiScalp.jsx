import DoughnutChart from './helpers/DonughtChart';
import useDoughnutDataset from '../../hooks/useDoughnutDataset';
import AccountCard from './helpers/AccountCard';
import StatsCard from './helpers/StatsCard';
import SelectMonth from './helpers/SelectMonth';
import SelectChart from './helpers/SelectChart';

const CasiScalp = ({
  accountData,
  isLoading,
  error,
  casiScalpData,
  cDoughnutData,
}) => {
  const { doughnutDataset, setActiveOption, monthlyGain } =
    useDoughnutDataset(cDoughnutData);

  const handleSelectChange = (event) => {
    setActiveOption(event.target.value);
  };

  return (
    <>
      <p className='text-sm max-w-2xl text-center mx-auto pt-5 pb-10 smooth'>
        This is a strategy that trades all pairs including indices. You can
        automate it and you can use it manually.
      </p>
      <div className='flex flex-col gap-6 md:flex-row'>
        <table className='border h-fit w-full md:max-w-[18rem]'>
          <thead>
            <tr className='flex justify-between text-xs px-4 py-2 border-b-2 bg-[#bfbfbf]'>
              <th>9928988</th>
              <th>(USD)</th>
            </tr>
          </thead>
          <AccountCard
            accountData={accountData}
            isLoading={isLoading}
            error={error}
          />
        </table>
        <SelectChart data={casiScalpData} />
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
            doughnutData={cDoughnutData}
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

export default CasiScalp;
