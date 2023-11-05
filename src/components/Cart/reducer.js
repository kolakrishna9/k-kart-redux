export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const CLEAR = 'CLEAR';
export const CHECKOUT = 'CHECKOUT';

const initialState = {
  cartItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItem = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { total, itemsCounter };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItem(state.cartItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newcartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: [...newcartItems],
        ...sumItem(newcartItems),
      };
    case "INCREASE":
      const indexI = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[indexI].quantity++;
      return {
        ...state,
        ...sumItem(state.cartItems),
      };
    case "DECREASE":
      const indexD = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[indexD].quantity--;
      return {
        ...state,
        ...sumItem(state.cartItems),
      };
    case "CLEAR":
      return {
        cartItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    case "CHECKOUT":
      return {
        cartItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    default:
      return state;
  }
};

export default cartReducer;
