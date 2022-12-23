import { createSlice } from "@reduxjs/toolkit";

const cryptoNews = createSlice({
    name: 'cryptoNews',
    initialState: {
        cryptoNews: null
    },
    reducers: {
        setCryptoNews: (state, action) => {
            state.cryptoNews = action.payload
        }
    }
})

export const {setCryptoNews} = cryptoNews.actions
export default cryptoNews.reducer