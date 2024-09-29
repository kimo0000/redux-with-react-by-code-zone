import { ADD_PRODUCT, GET_PRODUCT } from "../actions/product_action";

export const product_reducer = (state = [], action) => {
   switch (action.type) {
     case ADD_PRODUCT:
       return [...state, action.payload];

     case GET_PRODUCT:
       return [...action.payload];

     default:
       return state;
   }
}