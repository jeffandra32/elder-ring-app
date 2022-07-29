import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://eldenring.fanapis.com/api',
});
