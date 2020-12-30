import axios from 'axios';
import { URL_API } from '../config';

export class ProductServices {
  getAllCategory() {
    return axios({
      method: 'GET',
      url: `${URL_API}/getAllCategory`,
    });
  }
  getProductByCategory(id) {
    return axios({
      method: 'GET',
      url: ` ${URL_API}/getProductByCategory?categoryId=${id}`,
    });
  }
}

export const productServices = new ProductServices();
