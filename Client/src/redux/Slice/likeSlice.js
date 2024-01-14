import { createSlice } from "@reduxjs/toolkit";

const likeProductItems = createSlice({
  name: "likeProduct",
  initialState: {
    likeProductItems: [],
  },
  reducers: {
    addProductLike: (state, action) => {
      const productToAdd = action.payload;
      const productIndex = state.likeProductItems.findIndex((p) => p._id === productToAdd._id);

      if (productIndex === -1) {
        state.likeProductItems.push({ ...productToAdd, quantity: 1 });
      } else {
        state.likeProductItems[productIndex].quantity += 1;
      }
    },
    deleteProductLike: (state, action) => {
      const productIdToRemove = action.payload._id;
      state.likeProductItems = state.likeProductItems.filter((item) => item._id !== productIdToRemove);
    },
  },
});

export const { addProductLike, deleteProductLike } = likeProductItems.actions;
export const selectLike = (state) => state.like;
export default likeProductItems.reducer;
