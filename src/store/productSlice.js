import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
});
export const { fetchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export function getProducts() {
  return async function getProductsThunks(dispatch, getState) {
    const data = await fetch("https://fakestoreapi.com/products");
    console.log("data>>>>", data);

    const result = await data.json();
    console.log("result", result);

    dispatch(fetchProducts(result));
  };
}
