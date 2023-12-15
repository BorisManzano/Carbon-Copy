import { createAction, createReducer } from "@reduxjs/toolkit";

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");

const initialState = {
  username: null,
  email: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      return action.payload;
    })
    .addCase(logout, (state, action) => {
      return { ...initialState };
    });
});

export default userReducer;
