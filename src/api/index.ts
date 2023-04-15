import env from '@env';
import axios from 'axios';

const ApiClient = axios.create({
  baseURL: env.API_URL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default ApiClient;
