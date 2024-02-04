import { createSlice } from "@reduxjs/toolkit";

//can't use async code inside reducers

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    quantity: 0,
    uid: "",
    likes: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          sale: newItem.sale,
          quantity: 1,
          name: newItem.name,
        });
        state.total =
          state.total + (newItem.price * (100 - newItem.sale)) / 100;
        state.quantity++;
      } else {
        existingItem.quantity++;
        state.quantity++;
        state.total =
          state.total + (existingItem.price * (100 - existingItem.sale)) / 100;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.quantity--;
      state.total =
        state.total - (existingItem.price * (100 - existingItem.sale)) / 100;
    },

    addUid(state, action) {
      state.uid = action.payload;
    },

    clearCart(state) {
      state.items = [];
      state.total = 0;
      state.quantity = 0;
      state.uid = "";
    },
    replaceCart(state, action) {
      state.quantity = action.payload.quantity;
      state.items = (action.payload.items);
      state.total = action.payload.total;
      state.likes = action.payload.likes
    },
    addToLikes(state, action){
      let item = action.payload
      state.likes.push(item)
    },
    removeFromLikes(state, action){
      let item = action.payload
      state.likes = state.likes.filter(x => x !== item)
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
