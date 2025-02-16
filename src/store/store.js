import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import authReducer from "./authSlice";
// import Product from "../components/product";

//store will bring action and reducers together holda the application state
// const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//     products: productSlice,
//   },
// });

// export default store;
const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    auth: authReducer,
  },
});
export default store;
