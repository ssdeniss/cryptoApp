import { configureStore } from "@reduxjs/toolkit";
import cryptoCoinsReducer from "../reducer/cryptoCoins.reducer";
import cryptoNewsReducer from "../reducer/cryptoNews.reducer";

export default configureStore({
  reducer: {
    cryptoCoins: cryptoCoinsReducer,
    cryptoNews: cryptoNewsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
