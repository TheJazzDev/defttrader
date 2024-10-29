import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      localStorage.setItem('authUser', JSON.stringify(user));
    });

    const authUser = localStorage.getItem('authUser');

    if (authUser) {
      setUser(JSON.parse(authUser));
    }

    return unsubscribe;
  }, []);

  // const login = (email, password) => {
  //   return signInWithEmailAndPassword(auth, (email, password));
  // };

  const logout = () => {
    localStorage.removeItem('authUser');
    return auth.signOut();
  };

  const value = { user, logout, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
