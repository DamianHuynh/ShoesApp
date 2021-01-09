import BaseService from './BaseService';

const PREFIX = 'Product';
export class ProductServices extends BaseService {
  getAllCategory() {
    return this.get(`/${PREFIX}/getAllCategory`);
  }
  getProductByCategory(id) {
    return this.get(`/${PREFIX}/getProductByCategory?categoryId=${id}`);
  }
  getProductById(id) {
    return this.get(`/${PREFIX}/getbyid?id=${id}`);
  }
  getProductBestSell() {
    return this.get(`/${PREFIX}/getProductByFeature?feature=true`);
  }
}

export const productServices = new ProductServices();
