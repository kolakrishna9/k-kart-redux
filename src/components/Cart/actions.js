import { ADD_ITEM, REMOVE_ITEM, INCREASE, DECREASE, CLEAR, CHECKOUT } from './reducer';

export const addItem = (payload) => {
  return (dispatch) => {
    dispatch({ type: ADD_ITEM, payload })
  };
};

export const removeItem = (payload) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_ITEM, payload })
  };
};

export const increaseItem = (payload) => {
  return (dispatch) => {
    dispatch({ type: INCREASE, payload })
  };
};

export const decreaseItem = (payload) => {
  return (dispatch) => {
    dispatch({ type: DECREASE, payload })
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR })
  };
};

export const checkoutCart = () => {
  return (dispatch) => {
    dispatch({ type: CHECKOUT })
  };
};
