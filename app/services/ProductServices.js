import BaseService from './BaseService';

const PREFIX = 'Product';
export class ProductServices extends BaseService {
  getListCategory() {
    return this.get(`/${PREFIX}/getAllCategory`);
  }
  getListProductByCategory(id) {
    return this.get(`/${PREFIX}/getProductByCategory?categoryId=${id}`);
  }
  getListProductById(id) {
    return this.get(`/${PREFIX}/getbyid?id=${id}`);
  }
  getListProductBestSell() {
    return this.get(`/${PREFIX}/getProductByFeature?feature=true`);
  }
}

export const productServices = new ProductServices();
