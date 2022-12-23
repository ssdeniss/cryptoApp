import { createSlice } from "@reduxjs/toolkit";

const cryptoCoins = createSlice({
    name: 'cryptoCoins',
    initialState: {
        cryptoCoins: null
    },
    reducers: {
        setCryptoCoins: (state, action) => {
            state.cryptoCoins = action.payload
        }
    }
})

export const {setCryptoCoins} = cryptoCoins.actions
export default cryptoCoins.reducer