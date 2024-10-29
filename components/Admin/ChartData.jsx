import { toast } from 'react-toastify';
import {
  updateCasiScalpChart,
  updatePrecisionChart,
  updateAggressiveChart,
} from '../../services/updateChartData';

const ChartData = () => {
  const handleUpdateChart = async (id) => {
    if (id === 'precisionDoughnut') return await updatePrecisionChart();

    if (id === 'casiScalpDoughnut') return await updateCasiScalpChart();

    if (id === 'aggressiveDoughnut') return await updateAggressiveChart();
  };

  return (
    <div className='flex justify-around gap-4 my-6 max-w-3xl mx-auto'>
      {[
        ['Precision Trading Chart', 'precisionDoughnut'],
        ['Casi Scalp Stragegy Chart', 'casiScalpDoughnut'],
        ['Aggressive Beast Trading Chart', 'aggressiveDoughnut'],
      ].map(([title, id]) => (
        <button
          key={id}
          onClick={() =>
            toast.promise(handleUpdateChart(id), {
              pending: 'Updating Chart...⏳',
              success: 'Chart updated successfully! ',
              error: `Uh oh 😞, there was an error!`,
            })
          }
          className='bg-slate-500 py-2 px-4 rounded-md text-white font-semibold'>
          {title}
        </button>
      ))}
    </div>
  );
};

export default ChartData;
