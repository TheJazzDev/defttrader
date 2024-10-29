import { useState } from 'react';
import { db } from '../../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import InputField from '../../../utils/InputField';

const AddLineBarChart = () => {
  const [formData, setFormData] = useState({
    balance: '',
    pips: '',
    profit: '',
    date: '',
  });
  const [showForm, setShowForm] = useState(false);
  const [collectionRef, setCollectionRef] = useState('');
  const [formTitle, setFormTitle] = useState('');

  const handleShowForm = (col, title) => {
    setShowForm(true);
    setCollectionRef(col);
    setFormTitle(title);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    let newDate = new Date(formData.date);
    let timestamp = newDate.getTime();

    const data = {
      balance: +formData.balance,
      pips: +formData.pips,
      profit: +formData.profit,
      date: +timestamp,
    };

    const dbCollectionRef = collection(db, collectionRef);

    const handlePromise = addDoc(dbCollectionRef, data);

    toast.promise(handlePromise, {
      pending: `Adding chart data to database...⏳`,
      success: 'Added Chart Successfully! 👌',
      error: `Uh oh 😞, there was an error!`,
    });

    setFormData({ balance: '', pips: '', profit: '', date: '' });
  };

  return (
    <div className='mx-auto max-w-3xl'>
      <h2 className='text-xl text-center text-secondaryColor font-semibold my-10'>
        Add Line & Bar Chart
      </h2>
      <div className='flex justify-around gap-4 my-6 max-w-3xl mx-auto'>
        {[
          ['Precision Trading', 'precision'],
          ['Casi Scalp Stragegy', 'casiScalp'],
          ['Aggressive Beast Trading', 'aggressive'],
        ].map(([title, collection]) => (
          <button
            key={collection}
            onClick={() => handleShowForm(collection, title)}
            className='bg-slate-500 py-2 px-4 rounded-md text-white font-semibold'>
            {title}
          </button>
        ))}
      </div>
      {showForm && (
        <form onSubmit={submitHandler} className='flex flex-col flex-grow pb-4'>
          <p className='text-center mb-4 font-semibold text-sm'>{formTitle}</p>
          <InputField
            label='Balance'
            type='number'
            id=' balance'
            required
            value={formData.balance}
            setFormData={setFormData}
            name='balance'
          />
          <InputField
            label='Pips'
            type='number'
            id='pips'
            required
            value={formData.pips}
            setFormData={setFormData}
            name='pips'
          />
          <InputField
            label='Profit'
            type='number'
            id='profit'
            required
            value={formData.profit}
            setFormData={setFormData}
            name='profit'
          />
          <InputField
            label='Date'
            type='text'
            id='date'
            required
            placeholder='Jan 1 2023'
            value={formData.date}
            setFormData={setFormData}
            name='date'
          />
          <button className='text-center w-fit mt-12 mx-auto border px-3 py-2 bg-primaryColor rounded-lg text-white text-xs font-semibold'>
            Add Chart Data
          </button>
        </form>
      )}
    </div>
  );
};

export default AddLineBarChart;
