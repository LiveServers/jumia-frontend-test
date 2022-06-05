import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

const paginationReducer = createSlice({
  name: "paginationReducer",
  initialState,
  reducers: {
    setPage: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.page = action.payload;
    },
  },
});

export const { setPage } = paginationReducer.actions;

export default paginationReducer.reducer;
