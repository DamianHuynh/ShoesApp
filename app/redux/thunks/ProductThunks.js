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
        dispatch(ProductActions.getProductByCategory(content)),
      )
      .catch(() => dispatch());
  };
};
