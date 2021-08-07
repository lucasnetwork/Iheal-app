import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://backend-iheal-1.herokuapp.com',
});

api.interceptors.request.use(async request => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    request.headers.authorization = `Bearer ${token}`;
  }

  return request;
});
export default api;
