import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  ProductReducer,
  LoadingReducer,
});

export default rootReducer;
