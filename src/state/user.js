import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  email: null,
  isConfirmed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => action.payload,
    logout: (state, action) => {
      return {
        ...initialState,
      };
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
