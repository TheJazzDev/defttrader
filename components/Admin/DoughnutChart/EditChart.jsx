import React, { useEffect, useState } from 'react';
import { db } from '../../../services/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const EditChart = ({ chartData, getAllCharts, toggleModel }) => {
  const [title, setTitle] = useState({});
  const [gain, setGain] = useState({});
  const [currenciesArray, setCurrenciesArray] = useState([]);

  const fetchDocument = async (chartData) => {
    try {
      const docRef = doc(db, chartData.collection, chartData.docId);
      const docSnap = await getDoc(docRef);
      const currenciesData = docSnap.data();

      const currencies = [];

      for (const key in currenciesData.data) {
        currencies.push({
          title: currenciesData.data[key].title,
          value: currenciesData.data[key].value,
        });
      }

      setTitle(currenciesData.title);
      setGain(currenciesData.monthlyGain);
      setCurrenciesArray(currencies);
    } catch (error) {
      console.error('Error fetching document: ', error);
    }
  };

  useEffect(() => {
    if (chartData) {
      fetchDocument(chartData);
    }
  }, [chartData]);

  const handleDataChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const updatedCurrenciesArray = currenciesArray.map((item, i) => {
      if (item.title === name) {
        return { ...item, value: value };
      }
      return item;
    });

    setCurrenciesArray(updatedCurrenciesArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      monthlyGain: gain,
      data: currenciesArray,
      modifiedDate: Date.now(),
    };

    try {
      const docRef = doc(db, chartData.collection, chartData.docId);
      const updateArticle = updateDoc(docRef, data);

      toast.promise(updateArticle, {
        pending: 'Updating...⏳',
        success: 'Article Updated Successfully! 😃',
        error: `Uh oh 😞, there was an error posting article!`,
      });
      getAllCharts(chartData.collection);
      toggleModel();
      setTitle('');
      setGain('');
      setCurrenciesArray({});
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div className='w-full h-full overflow-x-hidden p-6'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col text-center mx-auto text-sm'>
        <button
          onClick={toggleModel}
          className='text-lg text-white font-bold absolute top-5 right-8 bg-primaryColor px-2.5 rounded-full child'>
          X
        </button>
        <h2 className='text-lg text-secondaryColor mb-6 font-semibold text-center'>
          {`Update ${title}`}
        </h2>
        <span className='flex items-center mx-auto gap-6 my-4 w-fit'>
          <label className='text-base text-paragraph'>Title</label>
          <input
            type='text'
            name='title'
            autoComplete='off'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='flex-1 p-2 rounded-md outline-none bg-transparent border border-gray-300'
          />
        </span>
        <span className='flex items-center mx-auto gap-6 my-4 w-fit'>
          <label className='text-base text-paragraph'>Gain</label>
          <input
            type='text'
            name='gain'
            autoComplete='off'
            value={gain}
            onChange={(e) => setGain(e.target.value)}
            className='flex-1 p-2 rounded-md outline-none bg-transparent border border-gray-300'
          />
        </span>
        <p className='text-lg text-center text-paragraph font-semibold my-6'>
          Currency Pairs
        </p>
        {currenciesArray.map((item, i) => (
          <div key={item.title}>
            <label className='text-sm text-paragraph'>{item.title}</label>
            <input
              type='number'
              name={item.title}
              autoComplete='off'
              value={item.value}
              onChange={handleDataChange}
              className='p-2 ml-6 mb-4 rounded-md outline-none bg-transparent border border-gray-300'
            />
          </div>
        ))}
        <button
          type='submit'
          className='text-center w-fit mt-4 mb-2 mx-auto border px-3 py-2 bg-primaryColor rounded-lg text-white text-xs font-semibold'>
          Update Data
        </button>
      </form>
    </div>
  );
};

export default EditChart;
