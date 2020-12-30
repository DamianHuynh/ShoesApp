import * as ProductTypes from '../constaint/ProductTypes';

export const getAllCategorySuccess = (respone) => ({
  type: ProductTypes.GET_ALL_CATEGORY_SUCCESS,
  payload: respone,
});

export const getProductByCategory = (respone) => ({
  type: ProductTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS,
  payload: respone,
});

export const getIdCategory = (id) => ({
  type: ProductTypes.GET_ID_CATEGORY,
  payload: id,
});
