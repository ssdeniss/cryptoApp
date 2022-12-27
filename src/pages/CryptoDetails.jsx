import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCryptoCoinSelected } from "../redux/reducer/cryptoCoinSelected.reducer";
import { Col, Row, Select } from "antd";
import LineChart from "../components/LineChart";
import { GenericStats, Stats } from "../constants/Constants";
import { setCryptoCoinHistory } from "../redux/reducer/cryptoCoinHistory.reducer";
import { REACT_APP_CRYPTO_RAPIDAPI_HOST, REACT_APP_RAPIDAPI_KEY } from "../constants/ApiKey";
const { Option } = Select;

const CryptoDetails = ({ setLoading }) => {
  const location = useLocation();
  const coin = useSelector(
    (coin) => coin?.cryptoCoinSelected?.cryptoCoinSelected?.data
  );
  const coinHistory = useSelector(
    (history) => history?.cryptoCoinHistory?.cryptoCoinHistory?.data
  );

  const dispatch = useDispatch();
  const [timeperiod, setTimeperiod] = useState("7d");
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  useEffect(() => {
    setLoading(true);
    const path = location.pathname.split("crypto/");
    const cryptoHistory = {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coin/${
        path[path.length - 1]
      }/history`,
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: timeperiod },
      headers: {
        "X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": REACT_APP_CRYPTO_RAPIDAPI_HOST,
      },
    };
    const cryptoCoinsApi = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: timeperiod,
        "uuids[0]": `${path[path.length - 1]}`,
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": REACT_APP_CRYPTO_RAPIDAPI_HOST,
      },
    };
    axios
      .request(cryptoCoinsApi)
      .then(function (response) {
        dispatch(setCryptoCoinSelected(response.data));
      })
      .catch(function (error) {
        dispatch(setCryptoCoinSelected(error));
      });
    axios
      .request(cryptoHistory)
      .then(function (response) {
        dispatch(setCryptoCoinHistory(response.data));
      })
      .catch(function (error) {
        dispatch(setCryptoCoinHistory(error));
      });
    setLoading(false);
  }, [timeperiod]);
  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <h2 className="coin-name" style={{ color: "#000" }}>
          <img
            style={{ marginRight: "10px", transform: "translateY(5px)" }}
            src={coin?.coins[0]?.iconUrl}
            alt="coin"
            width={30}
          />
          {coin?.coins[0]?.name}{" "}
          <span style={{ fontSize: "16px" }}>({coin?.coins[0]?.symbol})</span>
        </h2>
        <p>
          {coin?.coins[0]?.name} live price in US dollars. View value
          statistics, market cap and supply
        </p>
      </Col>

      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Time Period"
        onChange={(value) => setTimeperiod(value)}
      >
        {time.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Select>
      <LineChart coin={coin?.coins[0]} coinHistory={coinHistory} />
      <Col className="stats-container">
        <Stats coin={coin} />
        <GenericStats coin={coin} />
      </Col>
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <h4 style={{ color: "#000" }}>
            What is {coin?.coins[0]?.name} ?{" "}
            <a
              href={coin?.coins[0]?.coinrankingUrl}
              target="_blank"
              rel="noreferrer"
            >
              {coin?.coins[0]?.coinrankingUrl}
            </a>
          </h4>
        </Row>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
