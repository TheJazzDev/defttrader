import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { db } from '../../../services/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { contentModules } from './moudles';
const ReactQuill = dynamic(import('react-quill'), { ssr: false });

const EditArticle = ({ articleData, getAllArticles, toggleModel }) => {
  const [documentData, setDocumentData] = useState({});

  const fetchDocument = async (articleData) => {
    try {
      const docRef = doc(db, articleData.collection, articleData.docId);
      const docSnap = await getDoc(docRef);
      setDocumentData(docSnap.data());
    } catch (error) {
      console.error('Error fetching document: ', error);
    }
  };

  useEffect(() => {
    if (articleData) {
      fetchDocument(articleData);
    }
  }, [articleData]);

  const handleTitleChange = (e) => {
    setDocumentData((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleContentChange = (content) => {
    setDocumentData((prevState) => ({
      ...prevState,
      content: content,
    }));
  };

  const data = {
    title: documentData.title,
    content: documentData.content,
    dateModified: Date.now(),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, articleData.collection, articleData.docId);
      const updateArticle = updateDoc(docRef, data);

      toast.promise(updateArticle, {
        pending: 'Updating Article...⏳',
        success: 'Article Updated Successfully! 😃',
        error: `Uh oh 😞, there was an error posting article!`,
      });
      getAllArticles(articleData.collection);
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
    <div className='w-full h-full overflow-x-hidden p-6 bg-white rounded-3xl'>
      <button
        onClick={toggleModel}
        className='text-lg text-white font-bold absolute -top-12 right-0 bg-primaryColor px-2.5 rounded-full child'>
        X
      </button>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col flex-grow pb-4 text-sm'>
        <h2 className='text-lg text-secondaryColor mb-6 font-semibold text-center'>
          Update Article
        </h2>
        <label className='text-base text-paragraph font-semibold mb-2'>
          Title
        </label>
        <input
          type='text'
          name='title'
          autoComplete='off'
          value={documentData.title}
          onChange={handleTitleChange}
          className='p-2 mt-2 mb-12 rounded-md outline-none bg-transparent border border-gray-300'
        />
        <label className='text-base text-paragraph font-semibold mb-2'>
          Content
        </label>
        <ReactQuill
          theme='snow'
          name='content'
          value={documentData.content}
          onChange={handleContentChange}
          modules={contentModules}
          className='mb-12'
        />
        <button
          type='submit'
          className='text-center w-fit mt-8 mx-auto border px-3 py-2 bg-primaryColor rounded-lg text-white text-xs font-semibold'>
          Update Article
        </button>
      </form>
    </div>
  );
};

export default EditArticle;
