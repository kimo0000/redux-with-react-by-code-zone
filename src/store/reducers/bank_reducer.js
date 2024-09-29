import {WITHDRAW_ACTION, DEPOSITE_ACTION} from "../actions/bank_action";


export const bank_reducer = (state = 1000, action) => {
   switch(action.type) {
      case WITHDRAW_ACTION :
        return state - action.payload;

      case DEPOSITE_ACTION :
        return state + action.payload;
      
      default :
        return state;

   }
}