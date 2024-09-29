import { configureStore } from "@reduxjs/toolkit";
import bankReducer from './slices/bank_slice';
import productReducer from './slices/product_slice';

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    product: productReducer
  },
});
