import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from './reducer';

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = () => {

  return (dispatch) => {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
      })
      .catch((error) => {
      });
  };
};
