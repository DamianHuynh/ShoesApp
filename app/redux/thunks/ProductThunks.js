import { productServices } from '../../services/ProductServices';
import * as ProductActions from '../actions/ProductActions';

export const getAllCategory = () => {
  return (dispatch) => {
    productServices
      .getListCategory()
      .then(({ data: { content } }) =>
        dispatch(ProductActions.getAllCategorySuccess(content)),
      )
      .catch(() => dispatch());
  };
};
export const getProductByCategory = (id) => {
  return (dispatch) => {
    productServices
      .getListProductByCategory(id)
      .then(({ data: { content } }) =>
        dispatch(ProductActions.getProductByCategorySuccess(content)),
      )
      .catch(() => dispatch());
  };
};
export const getProductById = (id) => {
  return (dispatch) => {
    productServices
      .getListProductById(id)
      .then(({ data: { content } }) =>
        dispatch(ProductActions.getProductByIdSuccess(content)),
      )
      .catch(() => dispatch());
  };
};
export const getProductBestSell = () => {
  return (dispatch) => {
    productServices
      .getListProductBestSell()
      .then(({ data: { content } }) =>
        dispatch(ProductActions.getProductBestSellSuccess(content)),
      )
      .catch(() => dispatch());
  };
};
