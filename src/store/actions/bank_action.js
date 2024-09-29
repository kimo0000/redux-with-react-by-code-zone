export const DEPOSITE_ACTION = "DEPOSITE_ACTION";
export const WITHDRAW_ACTION = "WITHDRAW_ACTION";

export const withDrow = (amout) => {
    return {
      type: WITHDRAW_ACTION,
      payload: amout
    };
}

export const deposite = (amout) => {
    return {
      type: DEPOSITE_ACTION,
      payload: amout,
    };
}