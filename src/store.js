import { createStore, combineReducers, applyMiddleware } from 'redux';
import productsReducer from './components/Products/reducer';
import cartReducer from './components/Cart/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
