import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    classMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, classMenu } = appSlice.actions;
export default appSlice.reducer;
