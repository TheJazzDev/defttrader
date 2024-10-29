import Head from 'next/head';
import AdminPage from '../../components/Admin/AdminPage';
import { ProtectedRoute } from '../../components/Auth/ProtectedRoute';

const Index = () => {
  return (
    <>
      <Head>
        <title>Deft Trader - Admin Panel</title>
      </Head>
      <AdminPage />
    </>
  );
};

export default ProtectedRoute(Index);
