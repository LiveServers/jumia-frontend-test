import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "source",
};

const filterReducer = createSlice({
  name: "filterReducer",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterReducer.actions;

export default filterReducer.reducer;
