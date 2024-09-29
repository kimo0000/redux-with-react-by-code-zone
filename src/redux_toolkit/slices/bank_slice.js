import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  initialState: 1000,
  name: "bankSlice",
  reducers: {
    withDraw: (state, action) => {
      return (state -= action.payload);
    },
    deposite: (state, action) => {
      return (state += action.payload);
    },
  },
});

export const { withDraw, deposite } = bankSlice.actions;
export default bankSlice.reducer;
