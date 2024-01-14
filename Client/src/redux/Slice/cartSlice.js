import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload;
      const productIndex = state.cartItems.findIndex((p) => p._id === productToAdd._id);

      if (productIndex === -1) {
        state.cartItems.push({ ...productToAdd, quantity: 1 });
      } else {
        state.cartItems[productIndex].quantity += 1;
      }
    },
    deleteProduct: (state, action) => {
      const productIdToRemove = action.payload._id;
      state.cartItems = state.cartItems.filter((item) => item._id !== productIdToRemove);
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
