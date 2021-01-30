import * as ProductTypes from '../constant/ProductTypes';

const initialState = {
  allCategory: [],
  productByCategory: [],
  productById: {},
  bestSellProduct: [],
};

const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductTypes.GET_ALL_CATEGORY_SUCCESS: {
      payload = payload.filter((item) => item.categoryChild.length === 2);
      state.allCategory = payload;
      return { ...state };
    }
    case ProductTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS: {
      state.productByCategory = payload;
      return { ...state };
    }
    case ProductTypes.GET_PRODUCT_BY_ID_SUCCESS: {
      state.productById = payload;
      return { ...state };
    }
    case ProductTypes.GET_PRODUCT_BEST_SELL_SUCCESS: {
      payload = payload.map(({ shortDescription, ...item }) => {
        shortDescription = shortDescription.replace(/(\r\n|\n|\r)/gm, '');
        return { ...item, shortDescription };
      });

      state.bestSellProduct = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ProductReducer;
