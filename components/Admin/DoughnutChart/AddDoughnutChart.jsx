import { useRef, useState } from 'react';
import { db } from '../../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

const AddDoughnutChart = () => {
  const formRef = useRef(null);

  const [showForm, setShowForm] = useState(false);
  const [collectionRef, setCollectionRef] = useState('');
  const [title, setTitle] = useState('');
  const [gain, setGain] = useState('');
  const [enteredValue, setEnteredValue] = useState({
    title: '',
    value: 0,
  });
  const [numTitleFields, setNumTitleFields] = useState(1);
  const [numValueFields, setNumValueFields] = useState(1);
  const [formTitle, setFormTitle] = useState('');

  const addInputField = () => {
    setNumTitleFields(numTitleFields + 1);
    setNumValueFields(numValueFields + 1);
  };

  const handleTitle = (event, index) => {
    let newTitle = { ...enteredValue.title };
    newTitle[index] = event.target.value;
    setEnteredValue((prevState) => ({
      ...prevState,
      title: newTitle,
    }));
  };

  const handleValue = (event, index) => {
    let newValue = { ...enteredValue.value };
    newValue[index] = +event.target.value;
    setEnteredValue((prevState) => ({
      ...prevState,
      value: newValue,
    }));
  };

  const handleShowForm = (col, title) => {
    setShowForm(true);
    setCollectionRef(col);
    setFormTitle(title);
  };

  async function submitHandler(event) {
    event.preventDefault();

    const objectData = {};
    const arrayData = Object.entries(enteredValue.title).map(
      ([title, value], index) => {
        return {
          title: enteredValue.title[index],
          value: enteredValue.value[index],
        };
      }
    );
    objectData.fields = arrayData;

    const data = {
      title,
      monthlyGain: gain,
      date: Date.now(),
      data: arrayData,
    };

    const dbCollectionRef = collection(db, collectionRef);

    const addMonthData = addDoc(dbCollectionRef, data);

    toast.promise(addMonthData, {
      pending: `Adding ${title} data to database...⏳`,
      success: 'Added Data Successfully! 👌',
      error: `Uh oh 😞, there was an error!`,
    });

    setTitle('');
    setGain('');
    setEnteredValue({
      title: '',
      value: 0,
    });
    setShowForm(false);
  }

  return (
    <div className='mx-auto max-w-3xl'>
      <h2 className='text-xl text-center text-secondaryColor font-semibold my-10'>
        Add Doughnut Chart
      </h2>
      <div className='flex justify-around gap-4 my-6 max-w-3xl mx-auto'>
        {[
          ['Precision Trading', 'precisionDoughnut'],
          ['Casi Scalp Stragegy', 'casiScalpDoughnut'],
          ['Aggressive Beast Trading', 'aggressiveDoughnut'],
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
        <form
          ref={formRef}
          onSubmit={submitHandler}
          className='flex flex-col flex-grow p-4 bg-white border border-primaryColor rounded-md'>
          <p className='text-center mb-4 font-semibold text-sm'>{formTitle}</p>
          <span className='flex items-center mx-auto gap-6 my-4 w-full'>
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
          <span className='flex items-center mx-auto gap-6 my-4 w-full'>
            <label className='text-base text-paragraph'>Gain</label>
            <input
              type='number'
              name='gain'
              autoComplete='off'
              value={gain}
              onChange={(e) => setGain(+e.target.value)}
              className='flex-1 p-2 rounded-md outline-none bg-transparent border border-gray-300'
            />
          </span>
          <div className='flex gap-10'>
            <div className='flex-1 flex flex-col items-center gap-4'>
              <label
                htmlFor='field'
                className='text-base text-paragraph font-semibold'>
                Field
              </label>
              {Array.from({ length: numTitleFields }, (_, i) => (
                <input
                  key={i}
                  label='Title'
                  type='text'
                  id='field'
                  autoComplete='off'
                  placeholder='Enter currency pair'
                  name={`title${i}`}
                  defaultValue={enteredValue.title[i] || ''}
                  onChange={(e) => handleTitle(e, i)}
                  className='w-full p-2 rounded-md outline-none bg-transparent border border-gray-300'
                />
              ))}
            </div>
            <div className='flex-1 flex flex-col items-center gap-4'>
              <label
                htmlFor='value'
                className='text-base text-paragraph font-semibold'>
                Value
              </label>
              {Array.from({ length: numValueFields }, (_, i) => (
                <input
                  key={i}
                  type='number'
                  id='value'
                  autoComplete='off'
                  placeholder='Enter value'
                  name={`value${i}`}
                  defaultValue={enteredValue.value[i] || ''}
                  onChange={(e) => handleValue(e, i)}
                  className='w-full p-2 rounded-md outline-none bg-transparent border border-gray-300'
                />
              ))}
            </div>
          </div>
          <div
            className='text-right w-fit mt-6 border px-3 py-2 bg-slate-500 rounded-lg text-white text-xs cursor-pointer'
            onClick={addInputField}>
            Add Input
          </div>

          <button className='text-center w-fit mt-12 mx-auto border px-3 py-2 bg-primaryColor rounded-lg text-white text-xs font-semibold'>
            Add Monthly Chart
          </button>
        </form>
      )}
    </div>
  );
};

export default AddDoughnutChart;
