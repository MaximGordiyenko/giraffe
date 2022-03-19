import axios from "axios";

import { GET_FAILURE, GET_SUCCESS } from "../types";

export const getSuccess = api => ({
  type: GET_SUCCESS,
  payload: api,
});

export const getFailure = error => ({
  type: GET_FAILURE,
  payload: error,
});

export const getNewUsers = () => dispatch => {
  return axios.get(`${process.env.REACT_APP_SERVER_API}/users`)
    .then(res => dispatch(getSuccess(res.data)))
    .catch(error => dispatch(getFailure(error)))
}