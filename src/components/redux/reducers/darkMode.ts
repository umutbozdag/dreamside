import React, { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";



const darkmodeStatus = typeof window !== 'undefined' ? localStorage.getItem('theme') : null


export const themeMode = createSlice({
  name: "themeMode",
  initialState: {
    value: darkmodeStatus,
  },
  reducers: {
    changeDarkMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeDarkMode } = themeMode.actions;

export default themeMode.reducer;
