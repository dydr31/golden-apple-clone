import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const initialState = {
  theme: "light",
  menu: false,
  catalogue: false,
  logInForm: false,
  signUpForm: false,
  showItem: false,
  heart: false,
  option: "small",
  cart: false,
  settings: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    theme1(state) {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
    // theme2(state){
    //     state.theme =['theme2']
    // },
    // theme3(state){
    //     state.theme =['theme3']
    // }
  },
});

const headerSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    menu(state) {
      if (state.menu === false) {
        state.menu = true;
        state.cart= false;
        state.settings = false
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
        state.signUpForm = false
      } else {
        state.logInForm = false;
      }
    },
    signUpForm(state){
      if(state.signUpForm === false){
        state.signUpForm = true;
        state.menu = false;
        state.cart = false;
        state.logInForm = false
      } else {
        state.signUpForm = false
      }
    },
    cart(state){
      if (state.cart === false){
        state.cart = true
        state.menu = false;
        state.settings = false
      } else {
        state.cart = false
      }
    },
    showItem(state) {
      if (state.showItem === false) {
        state.showItem = true;
      } else {
        state.showItem = false;
      }
    },
    heart(state) {
      if (state.heart === false) {
        state.heart = true;
      } else {
        state.heart = false;
      }
    },
    optionLarge(state) {
      state.option = "large";
    },
    optionMedium(state) {
      state.option = "medium";
    },
    optionSmall(state) {
      state.option = "small";
    },
    showSettings(state){
      if (state.settings === false){
        state.settings = true
        state.menu = false
        state.cart = false
      } else {
        state.settings = false
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
    theme: themeSlice.reducer,
    menu: headerSlice.reducer,
    item: itemSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const themeActions = themeSlice.actions;
export const headerActions = headerSlice.actions;
export const itemActions = itemSlice.actions;
export default store;
