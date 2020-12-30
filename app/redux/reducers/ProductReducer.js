import * as ProductTypes from '../constaint/ProductTypes';

const initialState = {
  allCategory: [],
  idCategory: 'ADIDAS',
  productById: [],
  bestSellProduct: [],
};

const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductTypes.GET_ALL_CATEGORY_SUCCESS: {
      state.allCategory = payload;
      return { ...state };
    }
    case ProductTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS: {
      state.productById = payload;
      return { ...state };
    }
    case ProductTypes.GET_ID_CATEGORY: {
      state.idCategory = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ProductReducer;
