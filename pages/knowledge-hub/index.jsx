import Head from 'next/head';
import KnowledgeHub from '../../components/KnowledgeHub/KnowledgeHub';
import { db } from '../../services/firebase-admin';

const Index = (props) => {
  const { blogPosts } = props;

  return (
    <>
      <Head>
        <title>Deft Trader - Knowledge Hub</title>
      </Head>
      <KnowledgeHub blogContent={blogPosts} />
    </>
  );
};

export async function getStaticProps() {
  const blogPostsColRef = db.collection('blogPosts');

  const data = await blogPostsColRef.orderBy('dateCreated', 'desc').get();

  const blogPosts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: {
      blogPosts,
    },
    revalidate: 259200,
  };
}

export default Index;
