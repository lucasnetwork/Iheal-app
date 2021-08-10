import api from '../config/api';
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface constexAuthProps {
  userData: {
    token: undefined;
    user: {};
  };
  setUserData: React.Dispatch<
    React.SetStateAction<{
      token: undefined;
      user: {};
    }>
  >;
  checkedLogin: () => Promise<void>;
  authenticated: boolean;
  logout: () => void;
  setauthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContextAuth = createContext({} as constexAuthProps);
const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setauthenticated] = useState(false);
  const [userData, setUserData] = useState({
    token: undefined,
    user: {},
  });
  console.log(userData);
  const checkLoginToken = useCallback(async () => {
    const token = await AsyncStorage.getItem('token');
    if (authenticated === true) {
      logout();
    } else {
      checkedLogin();
    }
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      setauthenticated(true);
    }
  }, []);
  useEffect(() => {
    checkLoginToken();
  }, []);
  const checkedLogin = useCallback(async () => {
    const { token } = userData;
    await api
      .post('/users/me', null, {
        headers: { token },
      })
      .then(res => {
        setauthenticated(true);
      })
      .catch(err => {
        setUserData(false);
      });
  }, [userData]);
  const logout = useCallback(async () => {
    setUserData({
      token: undefined,
      user: {},
    });
    await AsyncStorage.setItem('token', '');
    setauthenticated(false);
  }, []);
  return (
    <ContextAuth.Provider
      value={{
        userData,
        setUserData,
        checkedLogin,
        authenticated,
        logout,
        setauthenticated,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};
export default AuthProvider;
export const useContextProviderAuth = () => useContext(ContextAuth);
