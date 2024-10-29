import { useRef, useState } from 'react';
import { db } from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import InputField from '../../utils/InputField';

const adminsCollectionRef = collection(db, 'admins');

const Editors = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    userName: '',
    ipAddress: '',
    role: '',
  });

  async function submitHandler(event) {
    event.preventDefault();

    const data = {
      id: v4(),
      userName: formData.userName,
      ipAddress: formData.ipAddress,
      role: formData.role,
      dateCreated: Date.now(),
    };

    const addAdmin = addDoc(adminsCollectionRef, data);

    toast.promise(addAdmin, {
      pending: 'Granting user access...⏳',
      success: 'Access Granted! 👌',
      error: `Uh oh 😞, there was an error!`,
    });

    formRef.current.reset();
  }

  return (
    <div className='mx-auto max-w-3xl'>
      <form
        onSubmit={submitHandler}
        ref={formRef}
        className='flex flex-col flex-grow pb-4'>
        <h2 className='text-xl text-center text-secondaryColor font-semibold my-6'>
          Add New Admin
        </h2>
        <InputField
          label='Name'
          type='text'
          id='text'
          required
          placeholder='Enter admin name'
          value={formData.name}
          setFormData={setFormData}
          name='userName'
        />
        <InputField
          label='Ip Address'
          type='text'
          id='text'
          required
          placeholder='Enter ip address'
          value={formData.name}
          setFormData={setFormData}
          name='ipAddress'
        />
        <InputField
          label='Role'
          type='text'
          id='text'
          required
          placeholder='Enter admin role'
          value={formData.name}
          setFormData={setFormData}
          name='role'
        />
        <button className='text-center w-fit mt-12 mx-auto border px-3 py-2 bg-primaryColor rounded-lg text-white text-xs font-semibold'>
          Grant Access
        </button>
      </form>
    </div>
  );
};

export default Editors;
