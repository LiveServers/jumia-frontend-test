import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
};

const dataReducer = createSlice({
  name: "dataReducer",
  initialState,
  reducers: {
    setData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.result = action.payload;
    },
  },
});

export const { setData } = dataReducer.actions;

export default dataReducer.reducer;
