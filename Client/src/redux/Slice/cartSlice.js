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
        state.cartItems.push({ ...productToAdd, quantity: 1 ,sizeOrder: ""});
      } else {
        state.cartItems[productIndex].quantity += 1;
      }
    },
    deleteProduct: (state, action) => {
      const productIdToRemove = action.payload._id;
      console.log(productIdToRemove)
      state.cartItems = state.cartItems.filter((item) => item._id !== productIdToRemove);
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      console.log(quantity)
      const productToUpdateIndex = state.cartItems.findIndex((p) => p._id === _id);

      if (productToUpdateIndex !== -1) {
        const newQuantity = Math.max(1, quantity);
        state.cartItems[productToUpdateIndex].quantity = newQuantity;
      }
    },
    updateSizeProduct: (state,action) =>{
      const { _id ,sizeOrder  } = action.payload;
      const productToUpdateIndex = state.cartItems.findIndex((p) => p._id === _id);
      state.cartItems[productToUpdateIndex].sizeOrder = "dsdsd";
    }
  },
});

export const { addProduct, deleteProduct ,updateQuantity,updateSizeProduct} = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
