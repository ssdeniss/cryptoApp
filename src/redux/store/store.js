import { configureStore } from "@reduxjs/toolkit";
import cryptoCoinsReducer from "../reducer/cryptoCoins.reducer";
import cryptoNewsReducer from "../reducer/cryptoNews.reducer";
import cryptoCoinSelectedReducer from "../reducer/cryptoCoinSelected.reducer";
import cryptoCoinHistoryReducer from "../reducer/cryptoCoinHistory.reducer";
import cryptoExchangesReducer from "../reducer/cryptoExchanges.reducer";

export default configureStore({
  reducer: {
    cryptoCoins: cryptoCoinsReducer,
    cryptoNews: cryptoNewsReducer,
    cryptoCoinSelected: cryptoCoinSelectedReducer,
    cryptoCoinHistory: cryptoCoinHistoryReducer,
    cryptoExchanges: cryptoExchangesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
