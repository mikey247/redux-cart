import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsShown: true,
  notification: null,
};

const uiSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    cartIsShownHandler: (state) => {
      state.cartIsShown = !state.cartIsShown;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
