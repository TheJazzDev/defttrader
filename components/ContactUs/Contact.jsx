import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import InputField from '../../utils/InputField';
import Sending from '../../utils/Sending';
import Sent from '../../utils/Sent';
import useModal from '../../hooks/use-modal';

const Contact = () => {
  const { toggleModel, Backdrop, ModalOverlay } = useModal();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [subject, setSubject] = useState('');
  
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  function submitHandler(e) {
    e.preventDefault();

    setIsSending(true);

    const parameters = {
      firstName: formData.firstName,
      firstName: formData.lastName,
      email: formData.email,
      subject,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        parameters,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false);
          toggleModel();
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
          });
          setSubject('');
          setMessage('');
        },
        () => {
          alert('Failed to send the message, please try again!');
          setIsSending(false);
        }
      )
      .catch((err) => console.log(err));
  }

  return (
    <div className='pt-24 lg:pt-32 px-4'>
      <div className='bg-[#19412c] py-12 px-12 text-white mb-12 rounded-xl'>
        <h1 className='text-3xl text-center'>You can contact us on</h1>
        <p className='text-sm max-w-4xl mt-6 mx-auto'>
          Trying to reach us? You can reach us through our social media handles
          or send a mail to{' '}
          <a className='text-blue-500' href='mailto:defttraderfx@gmail.com'>
            defttraderfx@gmail.com
          </a>{' '}
          or better still fill out the form below and we will get in touch with
          you.
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className='flex flex-col max-w-5xl mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-16 w-full'>
          <span className='flex-1'>
            <InputField
              label='First Name'
              type='text'
              id='fname'
              required
              placeholder='Enter first name'
              value={formData.firstName}
              setFormData={setFormData}
              name='firstName'
            />
          </span>
          <span className='flex-1'>
            <InputField
              label='Last Name'
              type='text'
              id='lname'
              required
              placeholder='Enter last name'
              value={formData.lastName}
              setFormData={setFormData}
              name='lastName'
            />
          </span>
        </div>
        <div className='flex flex-col lg:flex-row lg:gap-16 w-full'>
          <span className='flex-1'>
            <InputField
              label='Email'
              type='email'
              id='email'
              required
              placeholder='Enter your email'
              value={formData.email}
              setFormData={setFormData}
              name='email'
            />
          </span>
          <span className='flex-1'>
            <label
              htmlFor='subject'
              className='text-base text-paragraph font-semibold mb-2 block'>
              Subject
            </label>
            <select
              name='subject'
              id='subject'
              onChange={(e) => setSubject(e.target.value)}
              className='p-2.5 mt-2 w-full rounded-md outline-none bg-transparent border border-gray-300'>
              <option value='General Enquiry'>General Enquiry</option>
              <option value='Trade with Our Robot'>Trade with Our Robot</option>
              <option value='Mentorship'>Mentorship</option>
              <option value='Complaints'>Partnership</option>
            </select>
          </span>
        </div>
        <label
          htmlFor='message'
          className='text-base text-paragraph font-semibold mb-2 mt-12 lg:mt-0 block'>
          Message
        </label>
        <textarea
          name='message'
          id='message'
          placeholder='Enter your message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols='30'
          rows='6'
          className='p-2 border border-gray-300 rounded-md bg-transparent outline-none resizey-x-none'
        />
        {isSending ? (
          <Sending title='Sending...' />
        ) : (
          <button className='text-center w-fit mt-16 mx-auto border px-4 py-2 bg-primaryColor rounded-lg text-white text-sm font-semibold'>
            Submit
          </button>
        )}
      </form>
      <Backdrop />
      <ModalOverlay externalClass='h-fit max-w-lg'>
        <Sent toggleModel={toggleModel} />
      </ModalOverlay>
    </div>
  );
};

export default Contact;
