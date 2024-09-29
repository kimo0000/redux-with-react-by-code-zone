import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "productSlice/fetchProduct",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    // console.log(data);
    return data;
  }
);


export const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      // console.log(action);
      return [...state, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase((fetchProduct.fulfilled), (state, action) => {
      // console.log(action);
      return (state = action.payload);
      // console.log(state);
    });
    // builder.addCase(fetchProduct.pending, (state, action) => {
    //   state = "LOADING...";
    // });
    // builder.addCase(fetchProduct.rejected, (state, action) => {
    //   state = "ERROR";
    // });
  }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
