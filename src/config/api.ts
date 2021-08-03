import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: '',
});

api.interceptors.request.use(async request => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    request.headers.Authorization = `bearer ${token}`;
  }

  return request;
});
export default api;
