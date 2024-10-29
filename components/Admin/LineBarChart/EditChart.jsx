import React, { useEffect, useState } from 'react';
import { db } from '../../../services/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import InputField from '../../../utils/InputField';

const EditChart = ({ chartData, getAllCharts, toggleModel }) => {
  const [formData, setFormData] = useState({
    balance: '',
    pips: '',
    profit: '',
    date: '',
  });

  const fetchDocument = async (chartData) => {
    try {
      const docRef = doc(db, chartData.collection, chartData.docId);
      const docSnap = await getDoc(docRef);
      setFormData(docSnap.data());
    } catch (error) {
      console.error('Error fetching document: ', error);
    }
  };

  useEffect(() => {
    if (chartData) {
      fetchDocument(chartData);
    }
  }, [chartData]);

  function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newDate = new Date(formData.date);
    let timestamp = newDate.getTime();

    const data = {
      balance: +formData.balance,
      pips: +formData.pips,
      profit: +formData.profit,
      date: +timestamp,
    };

    try {
      const docRef = doc(db, chartData.collection, chartData.docId);

      const handlePromise = updateDoc(docRef, data);

      toast.promise(handlePromise, {
        pending: 'Updating Chart Data...⏳',
        success: 'Chart Updated Successfully! 😃',
        error: `Uh oh 😞, there was an error posting chart!`,
      });
      getAllCharts(chartData.collection);
      toggleModel();
      setDocumentData({
        title: '',
        content: '',
      });
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div className='w-full h-full overflow-x-hidden px-6 pt-6 bg-white rounded-3xl'>
      <button
        onClick={toggleModel}
        className='text-lg text-white font-bold absolute -top-8 -right-8 bg-primaryColor px-2.5 rounded-full child'>
        X
      </button>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col flex-grow pb-4 text-sm'>
        <h2 className='text-lg text-secondaryColor mb-6 font-semibold text-center'>
          Edit Chart Data
        </h2>
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
          id=' pips'
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
          value={convertTimestampToDate(formData.date)}
          setFormData={setFormData}
          name='date'
        />
        <button
          type='submit'
          className='text-center w-fit mt-6 mx-auto border px-3 py-2 bg-primaryColor rounded-lg text-white text-xs font-semibold'>
          Update Chart Data
        </button>
      </form>
    </div>
  );
};

export default EditChart;
