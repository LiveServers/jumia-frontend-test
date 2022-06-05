import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: false,
};

const alertReducer = createSlice({
  name: "alertReducer",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.details = action.payload;
    },
  },
});

export const { setAlert } = alertReducer.actions;

export default alertReducer.reducer;
