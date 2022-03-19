import { GET_FAILURE, GET_SUCCESS } from '../../types';

const initialState = {
  products: [],
  loading: true,
  error: null,
};

export const getProducts = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
        error: null,
      };
    case GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};