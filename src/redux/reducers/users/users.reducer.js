import { GET_FAILURE, GET_SUCCESS } from '../../types';

const initialState = {
  users: [],
  loading: true,
  error: null,
};

export const getUsers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SUCCESS:
      return {
        ...state,
        users: payload,
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