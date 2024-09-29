import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { bank_reducer } from "./reducers/bank_reducer";
import { product_reducer } from "./reducers/product_reducer";

const appReducer = combineReducers({
  bank: bank_reducer,
  product: product_reducer,
});

export const store = createStore(appReducer, applyMiddleware(thunk));