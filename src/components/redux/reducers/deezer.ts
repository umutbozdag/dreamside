import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Deezer from "../../../services/deezer";

const initialState = {
  deezerInstance: null,
} 

export const deezer = createSlice({
  name: "deezer",
  initialState,
  reducers: {
    setDeezerInstance: (state, action) => {
      state.deezerInstance = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setDeezerInstance } = deezer.actions;

export default deezer.reducer;
