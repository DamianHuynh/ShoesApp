import { productServices } from '../../services/ProductServices';
import * as ProductActions from '../actions/ProductActions';
import { ChangeLoading } from '../reducers/LoadingReducer';

export const getAllCategory = () => {
  return (dispatch) => {
    dispatch(ChangeLoading(true));
    productServices
      .getListCategory()
      .then(({ data: { content } }) => {
        dispatch(ProductActions.getAllCategorySuccess(content));
        dispatch(ChangeLoading(false));
      })
      .catch(() => dispatch(ChangeLoading(false)));
  };
};
export const getProductByCategory = (id) => {
  return (dispatch) => {
    dispatch(ChangeLoading(true));
    productServices
      .getListProductByCategory(id)
      .then(({ data: { content } }) => {
        dispatch(ProductActions.getProductByCategorySuccess(content));
        dispatch(ChangeLoading(false));
      })
      .catch(() => dispatch(ChangeLoading(false)));
  };
};
export const getProductById = (id) => {
  return (dispatch) => {
    dispatch(ChangeLoading(true));
    productServices
      .getListProductById(id)
      .then(({ data: { content } }) => {
        dispatch(ChangeLoading(false));
        dispatch(ProductActions.getProductByIdSuccess(content));
      })
      .catch(() => dispatch(ChangeLoading(false)));
  };
};
export const getProductBestSell = () => {
  return (dispatch) => {
    dispatch(ChangeLoading(true));
    productServices
      .getListProductBestSell()
      .then(({ data: { content } }) => {
        dispatch(ProductActions.getProductBestSellSuccess(content));
        dispatch(ChangeLoading(false));
      })
      .catch(() => dispatch(ChangeLoading(false)));
  };
};
