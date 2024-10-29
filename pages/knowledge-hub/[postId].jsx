//import { db } from '../../services/firebase';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import BlogDetail from '../../components/KnowledgeHub/BlogDetail';
import Head from 'next/head';
import { db } from '../../services/firebase-admin';

const BlogDetails = (props) => {
  const { blogPost } = props;

  return (
    <>
      <Head>
        <title>Deft Trader - Knowledge Hub</title>
      </Head>
      <BlogDetail
        title={blogPost.title}
        content={blogPost.content}
        thumbnail={blogPost.thumbnail}
        dateCreated={blogPost.dateCreated}
      />
    </>
  );
};

export async function getStaticPaths() {
  const blogPostsCollectionRef = db.collection('blogPosts');

  const data = await blogPostsCollectionRef.get();

  const paths = data.docs.map((post) => ({
    params: { postId: post.id },
  }));

  return {
    fallback: 'blocking',
    paths,
  };
}

export async function getStaticProps(context) {
  const postId = context.params.postId;

  const postRef = db.collection('blogPosts').doc(postId);

  const postSnap = await postRef.get();

  const blogPost = postSnap.data();

  return {
    props: {
      blogPost,
    },
    revalidate: 259200,
  };
}

export default BlogDetails;
