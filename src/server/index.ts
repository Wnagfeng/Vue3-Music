import { localCache } from '@/utils/Cache';
import { BASE_URL, TIME_OUT } from './config';
import HYRequest from './request';
import { LOGIN_TOKEN } from '@/global/constants';

const wfrequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true,
  interceptors: {
    requestSuccessFn: (config) => {
      // const token = localStorage.getItem('WFMusictoken');
      // if (config.headers && token) {
      //   config.headers.Authorization = token;
      // }
      return config;
    },
  },
});
export default wfrequest;
