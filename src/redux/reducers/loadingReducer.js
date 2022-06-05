import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

const loadingReducer = createSlice({
  name: "loadingReducer",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingReducer.actions;

export default loadingReducer.reducer;
