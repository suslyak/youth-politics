import axios from "axios";
import {HttpCode} from '../const';

const BACKEND_URL = `https://youthlib.mirea.ru/`;
const REQUEST_TIMEOUT = 60000;

export const createAPI = (onUnauthorized, onError) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw error;
    } else {
      onError(`${error.response.data.error} (${error.response.statusText})`);
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

