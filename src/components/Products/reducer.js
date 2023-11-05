export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

const initialState = {
  products: [],
  loading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUEST':
      return { ...state, loading: true };
    case 'GET_PRODUCTS_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
