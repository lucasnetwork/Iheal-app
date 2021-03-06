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
  checkedLogin: () => Promise<void>;
  authenticated: boolean;
  logout: () => void;
  setauthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  userData: {
    token: string;
    user: {
      id: string;
      username: string;
      email: string;
      address: string;
      cep: string;
      numberHouse: string;
      complement: string;
      district: string;
      uf: string;
    };
  };
  setUserData: React.Dispatch<
    React.SetStateAction<{
      token: string;
      user: {
        id: string;
        username: string;
        email: string;
        address: string;
        cep: string;
        numberHouse: string;
        complement: string;
        district: string;
        uf: string;
      };
    }>
  >;
}

const ContextAuth = createContext({} as constexAuthProps);
const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setauthenticated] = useState(false);
  const [userData, setUserData] = useState<{
    token: string;
    user: {
      id: string;
      username: string;
      email: string;
      address: string;
      cep: string;
      numberHouse: string;
      complement: string;
      district: string;
      uf: string;
    };
  }>({
    token: '',
    user: {
      id: '',
      username: '',
      email: '',
      address: '',
      cep: '',
      numberHouse: '',
      complement: '',
      district: '',
      uf: '',
    },
  });

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
        setauthenticated(false);
      });
  }, [userData]);
  const logout = useCallback(async () => {
    setUserData({
      token: '',
      user: {
        id: '',
        username: '',
        email: '',
        address: '',
        cep: '',
        numberHouse: '',
        complement: '',
        district: '',
        uf: '',
      },
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
