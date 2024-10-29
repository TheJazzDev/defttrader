import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { setDoc, doc } from 'firebase/firestore';
import { storage, db } from '../../../services/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import InputField from '../../../utils/InputField';
import { contentModules } from './moudles';

const ReactQuill = dynamic(import('react-quill'), { ssr: false });

const NewPostForm = () => {
  const formRef = useRef(null);
  const thumbnailRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    createdBy: '',
  });
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [content, setContent] = useState('');

  async function submitHandler(e) {
    e.preventDefault();

    const id = formData.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

    let thumbnail;

    try {
      const image = async () => {
        const thumbnailRef = ref(
          storage,
          `thumbnail/${thumbnailUrl.name + v4()}`
        );

        const snapshot = await uploadBytes(thumbnailRef, thumbnailUrl);

        thumbnail = await getDownloadURL(snapshot.ref);
      };

      await toast.promise(image, {
        pending: 'Uploading thumbnail...⏳',
        success: 'Thumbnail uploaded successfully! 👍🏽',
        error: 'Uh oh 😞, error uploading thumbnail!',
      });

      const data = {
        key: v4(),
        title: formData.title,
        content,
        thumbnail,
        createdBy: formData.createdBy,
        dateCreated: Date.now(),
      };

      const postArticle = setDoc(doc(db, 'blogPosts', id), data);

      toast.promise(postArticle, {
        pending: 'Creating Article...⏳',
        success: 'Article Created Successfully! 😃',
        error: `Uh oh 😞, there was an error posting article!`,
      });

      setFormData({
        title: '',
        createdBy: '',
      });
      setThumbnailUrl('');
      setContent('');
      thumbnailRef.current.value = '';
    } catch (e) {
      console.error(e);
    }
  }

  const fileType = ['.jpg', '.png'];

  return (
    <div className='mx-auto max-w-3xl'>
      <form
        ref={formRef}
        onSubmit={submitHandler}
        className='flex flex-col flex-grow pb-4 text-sm'>
        <h2 className='text-xl text-center font-semibold my-6 text-secondaryColor'>
          Post New Article
        </h2>
        <InputField
          label='Title'
          type='text'
          id='title'
          required
          placeholder='Enter article title'
          value={formData.title}
          setFormData={setFormData}
          name='title'
        />
        <label
          htmlFor='thumbnail'
          id='thumbnail'
          className='text-base text-paragraph font-semibold mb-2'>
          Thumbnail
        </label>
        <input
          type='file'
          name='thumbnail'
          id='thumbnail'
          accept={fileType}
          ref={thumbnailRef}
          onChange={(e) => {
            setThumbnailUrl(e.target.files[0]);
          }}
          className='p-2 mt-2 mb-12 rounded-md outline-none bg-transparent border border-gray-300'
        />
        <InputField
          label='Created By'
          type='text'
          id='createdBy'
          required
          placeholder='Enter your name'
          value={formData.createdBy}
          setFormData={setFormData}
          name='createdBy'
        />
        <p className='text-base text-paragraph font-semibold mb-2'>Content</p>
        <ReactQuill
          theme='snow'
          value={content}
          onChange={setContent}
          modules={contentModules}
          className='mb-12'
        />
        <button className='text-center w-fit mt-12 mx-auto border px-3 py-2 bg-primaryColor rounded-lg text-white text-xs font-semibold'>
          Post Article
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
