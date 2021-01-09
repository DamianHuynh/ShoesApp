import { productServices } from '../../services/ProductSevices';
import * as ProductActions from '../actions/ProductActions';

export const getAllCategory = () => {
  return (dispatch) => {
    productServices
      .getAllCategory()
      .then(({ data: { content } }) =>
        dispatch(ProductActions.getAllCategorySuccess(content)),
      )
      .catch(() => dispatch());
  };
};
export const getProductByCategory = (id) => {
  return (dispatch) => {
    productServices
      .getProductByCategory(id)
      .then(({ data: { content } }) =>
        dispatch(ProductActions.getProductByCategorySuccess(content)),
      )
      .catch(() => dispatch());
  };
};
export const getProductById = (id) => {
  return (dispatch) => {
    productServices
      .getProductById(id)
      .then(({ data: { content } }) =>
        dispatch(ProductActions.getProductByIdSuccess(content)),
      )
      .catch(() => dispatch());
  };
};
export const getProductBestSell = () => {
  return (dispatch) => {
    productServices
      .getProductBestSell()
      .then(({ data: { content } }) =>
        dispatch(ProductActions.getProductBestSell(content)),
      )
      .catch(() => dispatch());
  };
};
