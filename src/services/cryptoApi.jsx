import axios from "axios";
import { useDispatch } from "react-redux";
import { setCryptoCoins } from "../redux/reducer/cryptoCoins.reducer";
import { Circles } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { setCryptoNews } from "../redux/reducer/cryptoNews.reducer";

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
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "077c4459c1msh0272762d3c0b820p1727ebjsn02ee8905d264",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const cryptoNewsApi = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news",
    params: { safeSearch: "Off", textFormat: "Raw" },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "077c4459c1msh0272762d3c0b820p1727ebjsn02ee8905d264",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
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
  useEffect(() => {
    setLoading(true);
    cryptoCoinsRequest();
    cryptoNewsRequest();
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
