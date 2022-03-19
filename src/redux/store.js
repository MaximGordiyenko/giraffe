import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "./middleware/logger";
import { getUsers } from './reducers/users/users.reducer';

const middlewareEnhancer = applyMiddleware(thunk, logger);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(
  combineReducers({
    getUsers
  }),
  composedEnhancers
);