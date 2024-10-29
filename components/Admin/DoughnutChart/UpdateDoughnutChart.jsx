import { useState } from 'react';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../../../services/firebase';
import { toast } from 'react-toastify';
import useModal from '../../../hooks/use-modal';
import EditChart from './EditChart';

const UpdateDoughnutChart = () => {
  const { toggleModel, Backdrop, ModalOverlay } = useModal();

  const [chartData, setChartData] = useState({});
  const [chartArray, setChartArray] = useState([]);
  const [activeCol, setActiveCol] = useState('');

  const getAllCharts = async (col) => {
    try {
      const doughnutColRef = collection(db, col);
      const q = query(doughnutColRef, orderBy('date', 'desc'));
      const data = await getDocs(q);
      const doughnutData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setChartArray(doughnutData);
      setActiveCol(col);
      return doughnutData;
    } catch (err) {
      console.log(err);
    }
  };

  const editMonth = async (docId) => {
    setChartData({ collection: activeCol, docId: docId });
    toggleModel();
  };

  const deleteMonth = async (docId) => {
    if (window.confirm('Are you sure you want to delete?')) {
      try {
        const deleted = async () => {
          await deleteDoc(doc(db, activeCol, docId));
          getAllCharts(activeCol);
        };

        await toast.promise(deleted, {
          pending: 'Deleting...⏳',
          success: 'Article Deleted Successfully! 😃',
          error: `Uh oh 😞, there was an error deleting article!`,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Deletion Canceled');
    }
  };

  return (
    <div className='mx-auto hidden md:block mb-12'>
      <h2 className='text-xl text-center text-secondaryColor font-semibold my-6'>
        Update Donughnut Chat
      </h2>
      <div className='flex justify-around gap-4 my-6 max-w-3xl mx-auto'>
        {[
          ['Precision Trading', 'precisionDoughnut'],
          ['Casi Scalp Stragegy', 'casiScalpDoughnut'],
          ['Aggressive Beast Trading', 'aggressiveDoughnut'],
        ].map(([title, collection]) => (
          <button
            key={collection}
            onClick={() =>
              toast.promise(getAllCharts(collection), {
                pending: `Fetching ${title} data...⏳`,
                success: 'There you go! 😃',
                error: `Uh oh 😞, there was an error fetching chart data!`,
              })
            }
            className='bg-slate-500 py-2 px-4 rounded-md text-white font-semibold'>
            {title}
          </button>
        ))}
      </div>
      <table className='mx-auto border'>
        <thead className='block'>
          <tr className='h-10 text-sm text-white bg-primaryColor'>
            <th className='border-r w-24'>Serial</th>
            <th className='border-r w-96'>Month</th>
            <th className='border-r w-36'>Edit Chart</th>
            <th className='border-r w-36'>Delete Chart</th>
          </tr>
        </thead>
        <tbody className={`${
            chartArray.length >= 12 ? 'h-[30rem]' : 'h-fit'
          }  block overflow-auto table_scroll`}>
          {chartArray.map(({ title, id }, index) => (
            <tr key={id} className='border'>
              <td className='text-center w-24 border py-2'>{index + 1}.</td>
              <td className='text-center w-96 border'>{title}</td>

              <td
                onClick={() => editMonth(id)}
                className='text-center w-36 border'>
                <button>Edit</button>
              </td>
              <td
                onClick={() => deleteMonth(id)}
                className='text-center w-36 border'>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {chartArray.length === 0 && (
        <p className='text-base text-center my-12'>
          Click the button above to fetch chartdata from the server!
        </p>
      )}
      <Backdrop />
      <ModalOverlay externalClass='h-3/4 max-w-3xl'>
        <EditChart
          chartData={chartData}
          getAllCharts={getAllCharts}
          toggleModel={toggleModel}
        />
      </ModalOverlay>
    </div>
  );
};

export default UpdateDoughnutChart;
