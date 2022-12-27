import { createSlice } from "@reduxjs/toolkit";

const cryptoExchanges = createSlice({
  name: "cryptoExchanges",
  initialState: {
    cryptoExchanges: null,
  },
  reducers: {
    setCryptoExchanges: (state, action) => {
      state.cryptoExchanges = action.payload;
    },
  },
});

export const { setCryptoExchanges } = cryptoExchanges.actions;
export default cryptoExchanges.reducer;
