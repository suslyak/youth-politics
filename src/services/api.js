import axios from "axios";
import {HttpCode} from '../const';

const BACKEND_URL = `https://dev.youthlib.mirea.ru/`;
const REQUEST_TIMEOUT = 60000;

export const createAPI = (onUnauthorized, onError) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {

    onError(`${error}`);

    /*if (!!response && (response.status === HttpCode.UNAUTHORIZED)) {
      onUnauthorized();
      throw error;
    } else {
      onError(`${error.response.data.error} (${error.response.statusText})`);
    }*/

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

