import React, { useState } from 'react';
import { db } from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import InputField from '../utils/InputField';
import { toast } from 'react-toastify';

const CopyOnClick = () => {
  const [formData, setFormData] = useState({
    balance: '',
    pips: '',
    profit: '',
    date: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newDate = new Date(formData.date);
    let timestamp = newDate.getTime();

    const data = {
      balance: +formData.balance,
      pips: +formData.pips,
      profit: +formData.profit,
      date: timestamp,
    };

    const adminsCollectionRef = collection(db, 'aggressive');

    const addData = addDoc(adminsCollectionRef, data);

    toast.promise(addData, {
      pending: 'Add Data...⏳',
      success: 'Data Added Successfully! 👌',
      error: `Uh oh 😞, there was an error!`,
    });

    setFormData({
      balance: '',
      pips: '',
      profit: '',
      date: '',
    });

    console.log(data);
    console.log(formData.date);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center h-screen pb-4 mx-auto max-w-xl'>
      <InputField
        label='Balance'
        type='number'
        id='balance'
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
        value={formData.date}
        setFormData={setFormData}
        name='date'
      />
      <button className='mt-10 text-sm font-semibold text-white border px-24 py-3 bg-green-600 rounded-xl'>
        Go
      </button>
    </form>
  );
};

export default CopyOnClick;
