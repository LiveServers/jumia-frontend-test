import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
};

const cardReducer = createSlice({
  name: "cardReducer",
  initialState,
  reducers: {
    setResults: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.details = action.payload;
    },
  },
});

export const { setResults } = cardReducer.actions;

export default cardReducer.reducer;
