import { createSlice } from "@reduxjs/toolkit";

const cryptoCoinHistory = createSlice({
  name: "cryptoCoinHistory",
  initialState: {
    cryptoCoinHistory: null,
  },
  reducers: {
    setCryptoCoinHistory: (state, action) => {
      state.cryptoCoinHistory = action.payload;
    },
  },
});

export const { setCryptoCoinHistory } = cryptoCoinHistory.actions;
export default cryptoCoinHistory.reducer;
