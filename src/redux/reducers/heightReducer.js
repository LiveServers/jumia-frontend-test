import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: 0,
};

const heightReducer = createSlice({
  name: "heightReducer",
  initialState,
  reducers: {
    increment: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.height = action.payload;
    },
  },
});

export const { increment } = heightReducer.actions;

export default heightReducer.reducer;
