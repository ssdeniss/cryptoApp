import axios from "axios";
import { useDispatch } from "react-redux";
import { setCryptoCoins } from "../redux/reducer/cryptoCoins.reducer";
import { Circles } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { setCryptoNews } from "../redux/reducer/cryptoNews.reducer";
import { setCryptoExchanges } from "../redux/reducer/cryptoExchanges.reducer";
import { REACT_APP_CRYPTO_RAPIDAPI_HOST, REACT_APP_RAPIDAPI_KEY, REACT__APP_NEWS_RAPIDAPI_HOST } from "../constants/ApiKey";

const CryptoApi = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cryptoCoinsApi = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "100",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": REACT_APP_CRYPTO_RAPIDAPI_HOST,
    },
  };
  const cryptoNewsApi = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news",
    params: {
      category: "ScienceAndTechnology",
      safeSearch: "Off",
      textFormat: "Raw",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": REACT__APP_NEWS_RAPIDAPI_HOST,
    },
  };
  const cryptoExchangesApi = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      limit: "100",
      offset: "0",
      orderBy: "24hVolume",
      orderDirection: "desc",
    },
    headers: {
      "X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": REACT_APP_CRYPTO_RAPIDAPI_HOST,
    },
  };
  const cryptoCoinsRequest = () => {
    axios
      .request(cryptoCoinsApi)
      .then(function (response) {
        dispatch(setCryptoCoins(response.data));
      })
      .catch(function (error) {
        dispatch(setCryptoCoins(error));
      });
  };
  const cryptoNewsRequest = () => {
    axios
      .request(cryptoNewsApi)
      .then(function (response) {
        dispatch(setCryptoNews(response.data));
      })
      .catch(function (error) {
        dispatch(setCryptoNews(error));
      });
  };
  const cryptoExchangesRequest = () => {
    axios
      .request(cryptoExchangesApi)
      .then(function (response) {
        dispatch(setCryptoExchanges(response.data));
      })
      .catch(function (error) {
        dispatch(setCryptoExchanges(error));
      });
  };

  useEffect(() => {
    setLoading(true);
    cryptoCoinsRequest();
    cryptoNewsRequest();
    cryptoExchangesRequest();
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader__wrapper">
          <Circles
            className="circles"
            height="80"
            width="80"
            ariaLabel="loading"
            color="#0071bd"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CryptoApi;
