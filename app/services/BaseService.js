import axios from 'axios';
import { URL_API } from '../config';

export default class BaseService {
  get(url) {
    return axios({
      url: `${URL_API}${url}`,
      method: 'GET',
      headers: { Authorization: 'Bearer' },
    });
  }
  post(url, data) {
    return axios({
      url: `${URL_API}${url}`,
      method: 'POST',
      data,
    });
  }
}
