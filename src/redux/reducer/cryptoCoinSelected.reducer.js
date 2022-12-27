import { createSlice } from "@reduxjs/toolkit";

const cryptoCoinSelected = createSlice({
  name: "cryptoCoinSelected",
  initialState: {
    cryptoCoinSelected: null,
  },
  reducers: {
    setCryptoCoinSelected: (state, action) => {
      state.cryptoCoinSelected = action.payload;
    },
  },
});

export const { setCryptoCoinSelected } = cryptoCoinSelected.actions;
export default cryptoCoinSelected.reducer;
