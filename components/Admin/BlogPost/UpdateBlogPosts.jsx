import { useState } from 'react';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { formatPostsDate } from '../../../utils/format';
import EditArticle from './EditArticle';
import useModal from '../../../hooks/use-modal';
import { db, authenticatedUser } from '../../../services/firebase';

const UpdateBlogPosts = () => {
  const { toggleModel, Backdrop, ModalOverlay } = useModal();

  const [articleData, setArticleData] = useState({});
  const [allPosts, setAllPosts] = useState([]);

  const getAllArticles = async () => {
    const headers = await authenticatedUser();

    try {
      const blogPostsColRef = collection(db, 'blogPosts');
      const q = query(blogPostsColRef, orderBy('dateCreated', 'desc'));
      const data = await getDocs(q, {
        fetchOptions: { headers },
      });
      const blogPosts = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setAllPosts(blogPosts);
      return blogPosts;
    } catch (err) {
      console.log(err);
    }
  };

  const editArticle = async (docId) => {
    setArticleData({ collection: 'blogPosts', docId: docId });
    toggleModel();
  };

  const deleteArticle = async (docId) => {
    if (window.confirm('Are you sure you want to delete?')) {
      try {
        const deleted = async () => {
          await deleteDoc(doc(db, 'blogPosts', docId));
          getAllArticles();
        };

        await toast.promise(deleted, {
          pending: 'Deleting...⏳',
          success: 'Article Deleted Successfully! 😃',
          error: `Uh oh 😞, there was an error deleting article!`,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Deletion Canceled');
    }
  };

  return (
    <div className='mx-auto hidden md:block mb-12'>
      <h2 className='text-xl text-center text-secondaryColor font-semibold my-6'>
        Update Posted Article
      </h2>
      <table className='mx-auto border'>
        <thead className='block'>
          <tr className='h-10 text-sm text-white bg-primaryColor'>
            <th className='border-r w-24'>Serial</th>
            <th className='border-r w-96'>Post Title</th>
            <th className='border-r w-44'>Created By</th>
            <th className='border-r w-44'>Created On</th>
            <th className='border-r w-36'>Edit Post</th>
            <th className='w-36'>Delete Post</th>
          </tr>
        </thead>
        <tbody
          className={`${
            allPosts.length >= 12 ? 'h-[30rem]' : 'h-fit'
          }  block overflow-auto table_scroll`}>
          {allPosts.map(({ title, createdBy, dateCreated, id, key }, index) => (
            <tr key={key} className='border'>
              <td className='text-center w-24 border py-2'>{index + 1}.</td>
              <td className='text-left w-96 border pl-2'>{title}</td>
              <td className='text-center w-44 border'>{createdBy}</td>
              <td className='text-center w-44 border'>
                {formatPostsDate(dateCreated)}
              </td>
              <td
                onClick={() => editArticle(id)}
                className='text-center w-36 border'>
                <button>Edit</button>
              </td>
              <td
                onClick={() => deleteArticle(id)}
                className='text-center w-36 border'>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {allPosts.length === 0 && (
        <>
          <p className='text-base text-center my-12'>
            Click the button below to fetch all post from the server!
          </p>
          <div
            onClick={() =>
              toast.promise(getAllArticles(), {
                pending: 'Fetching posts...⏳',
                success: 'There you go! 😃',
                error: `Uh oh 😞, there was an error fetching posts!`,
              })
            }
            className='text-center w-fit mt-12 mx-auto border px-3 py-2 bg-primaryColor rounded-lg text-white text-xs font-semibold cursor-pointer'>
            Fetch all blog posts
          </div>
        </>
      )}
      <Backdrop />
      <ModalOverlay externalClass='h-full max-w-5xl px-8'>
        <EditArticle
          articleData={articleData}
          getAllArticles={getAllArticles}
          toggleModel={toggleModel}
        />
      </ModalOverlay>
    </div>
  );
};

export default UpdateBlogPosts;
