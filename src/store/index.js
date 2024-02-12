import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const initialState = {
  menu: false,
  catalogue: false,
  logInForm: false,
  signUpForm: false,
  // showItem: false,
  cart: false,
  settings: false,
  likes: false,
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
      } else {
        state.menu = false;
        state.catalogue = false;
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
      } else {
        state.logInForm = false;
      }
    },
    signUpForm(state) {
      if (state.signUpForm === false) {
        state.signUpForm = true;
        state.menu = false;
        state.cart = false;
        state.logInForm = false;
        state.likes = false;
      } else {
        state.signUpForm = false;
      }
    },
    cart(state) {
      if (state.cart === false) {
        state.cart = true;
        state.menu = false;
        state.settings = false;
        state.likes = false;
      } else {
        state.cart = false;
      }
    },
    // showItem(state) {
    //   if (state.showItem === false) {
    //     state.showItem = true;
    //   } else {
    //     state.showItem = false;
    //   }
    // },
    showSettings(state) {
      if (state.settings === false) {
        state.settings = true;
        state.menu = false;
        state.cart = false;
        state.likes = false;
      } else {
        state.settings = false;
      }
    },
    likes(state){
      if (state.likes === false){
        state.likes = true;
        state.menu = false;
        state.settings = false;
        state.cart = false;
      } else {
        state.likes = false;
      }
    }
  },
});

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    optionLarge(state) {
      if (state !== "large") {
        state.option = "large";
      } else {
        state.option = "aaa";
      }
    },
    optionMedium(state) {
      state.option = "medium";
    },
    optionSmall(state) {
      state.option = "small";
    },
  },
});

const store = configureStore({
  reducer: {
    menu: headerSlice.reducer,
    item: itemSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const headerActions = headerSlice.actions;
export const itemActions = itemSlice.actions;
export default store;
