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
        setTimeout(() => {
          dispatch(ChangeLoading(false));
        }, 1000);
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
        setTimeout(() => {
          dispatch(ChangeLoading(false));
        }, 1000);
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
        setTimeout(() => {
          dispatch(ChangeLoading(false));
        }, 1000);
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
        setTimeout(() => {
          dispatch(ChangeLoading(false));
        }, 1000);
      })
      .catch(() => dispatch(ChangeLoading(false)));
  };
};
