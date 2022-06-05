import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "election",
};

const searchReducer = createSlice({
  name: "searchReducer",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.keyword = action.payload;
    },
  },
});

export const { setKeyword } = searchReducer.actions;

export default searchReducer.reducer;
