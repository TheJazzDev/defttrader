import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../services/firebase';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Image from 'next/image';
import loginImage from '../../assets/auth/login-credentials.png';
import Link from 'next/link';

const SignIn = () => {
  const { push } = useRouter();

  const errRef = useRef();

  const [resetPwd, setResetPwd] = useState(false);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, pwd).then(() => {
        push('/casidefttrader');
      });
    } catch (err) {
      setErrMsg('Incorrect email or password');
    }
  };

  const handleUpdatePassWord = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmail('');
        setResetSuccess(true);
        setTimeout(() => {
          setResetSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFocus = () => {
    setErrMsg('');
  };

  return (
    <section className='flex items-center justify-center h-screen'>
      <div className='p-8 border rounded-xl'>
        <h1 className='text-primaryColor text-xl font-semibold mb-4'>
          DeftTrader! Administration Login
        </h1>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='text-center lg:text-left'>
            <p className='max-w-sm mb-6'>
              Use a valid email and password to gain access to the administrator
              backend.
            </p>
            <Link href='/' className='font-semibold text-primaryColor'>
              Go to site home page
            </Link>
            <Image
              src={loginImage}
              alt='loginImage'
              priority
              width='auto'
              height='auto'
              className='w-40 mx-auto lg:mx-0'
            />
          </div>
          <div className='w-full flex flex-col justify-center bg-[#ebebeb] rounded-xl'>
            <p
              ref={errRef}
              className={
                errMsg
                  ? 'bg-red-500 text-center text-white p-2 m-4 rounded-md'
                  : 'absolute -left-[999px]'
              }
              aria-live='assertive'>
              {errMsg}
            </p>
            <form
              {...(resetPwd
                ? {
                    onSubmit: handleUpdatePassWord,
                  }
                : {
                    onSubmit: handleSubmit,
                  })}
              onFocus={handleFocus}
              className='flex flex-col justify-around flex-grow p-8'>
              <div className='flex justify-between items-center mb-6'>
                <label htmlFor='email' className='text-base'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  autoComplete='off'
                  value={email}
                  placeholder='Enter your email'
                  onChange={(e) => setEmail(e.target.value)}
                  className='text-sm px-2 py-0.5 rounded-sm border border-black outline-none w-2/3 placeholder:text-xs'
                />
              </div>
              {resetSuccess && resetPwd && (
                <p className='bg-green-500 p-1.5 italic text-center rounded-xl text-white'>
                  Email reset sent successfully!
                </p>
              )}
              {!resetPwd && (
                <div className='flex justify-between items-center lg:my-0'>
                  <label htmlFor='password' className='text-base'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    placeholder='Enter your password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    className='text-sm px-2 py-0.5 rounded-sm border border-black outline-none w-2/3 placeholder:text-xs'
                  />
                </div>
              )}
              <button className='py-1 px-6 bg-primaryColor text-white w-fit mx-auto border text-base rounded-md mt-6'>
                {!resetPwd ? 'Login' : 'Reset Password'}
              </button>
            </form>
            {!resetPwd ? (
              <button
                onClick={() => setResetPwd(true)}
                className='text-center italic cursor-pointer text-blue-400'>
                Reset Password
              </button>
            ) : (
              <button
                onClick={() => setResetPwd(false)}
                className='text-center italic cursor-pointer text-blue-400'>
                Go back to Login
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
