import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const initialState = {
  menu: false,
  catalogue: false,
  logInForm: false,
  signUpForm: false,
  cart: false,
  settings: false,
  likes: false,
  disableScrolling: false,
};

const headerSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    menu(state) {
      if (state.menu === false) {
        state.menu = true;
        state.cart = false;
        state.settings = false;
        state.likes = false;
        state.disableScrolling = true;
      } else {
        state.menu = false;
        state.catalogue = false;
        state.disableScrolling = false;
      }
    },
    catalogue(state) {
      if (state.catalogue === false) {
        state.catalogue = true;
      } else {
        state.catalogue = false;
      }
    },
    logInForm(state) {
      if (state.logInForm === false) {
        state.logInForm = true;
        state.menu = false;
        state.cart = false;
        state.signUpForm = false;
        state.likes = false;
        state.disableScrolling = true;
      } else {
        state.logInForm = false;
        state.disableScrolling = false;
      }
    },
    signUpForm(state) {
      if (state.signUpForm === false) {
        state.signUpForm = true;
        state.menu = false;
        state.cart = false;
        state.logInForm = false;
        state.likes = false;
        state.disableScrolling = true;
      } else {
        state.signUpForm = false;
        state.disableScrolling = false;
      }
    },
    cart(state) {
      if (state.cart === false) {
        state.cart = true;
        state.menu = false;
        state.settings = false;
        state.likes = false;
        state.disableScrolling = true;
      } else {
        state.cart = false;
        state.disableScrolling = false;
      }
    },
    showSettings(state) {
      if (state.settings === false) {
        state.settings = true;
        state.menu = false;
        state.cart = false;
        state.likes = false;
        state.disableScrolling = true;
      } else {
        state.settings = false;
        state.disableScrolling = false;
      }
    },
    likes(state){
      if (state.likes === false){
        state.likes = true;
        state.menu = false;
        state.settings = false;
        state.cart = false;
        state.disableScrolling = true;
      } else {
        state.likes = false;
        state.disableScrolling = false;
      }
    }
  },
});



const store = configureStore({
  reducer: {
    menu: headerSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const headerActions = headerSlice.actions;
export default store;
