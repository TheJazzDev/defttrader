import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../context/AuthContext';

export const ProtectedRoute = (WrappedComponent) => {
  const WithAuth = (props) => {
    const { user } = useAuthContext();

    const { replace } = useRouter();

    useEffect(() => {
      if (!user) {
        replace('/auth');
      }
    }, [user, replace]);

    if (!user) {
      replace('/auth');
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};
