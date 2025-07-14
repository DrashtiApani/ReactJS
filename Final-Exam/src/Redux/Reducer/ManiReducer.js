import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  product: ProductReducer,
  auth : AuthReducer

});

export default rootReducer;
