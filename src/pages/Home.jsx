import { Typography, Row, Col, Statistic } from "antd";
import millify from "millify";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";

const Home = () => {
  const cryptoCoins = useSelector((coins) => coins?.cryptoCoins?.cryptoCoins);
  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={cryptoCoins?.data?.stats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(cryptoCoins?.data?.stats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(cryptoCoins?.data?.stats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(cryptoCoins?.data?.stats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(cryptoCoins?.data?.stats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container" style={{ marginBottom: "20px" }}>
        <h2 className="home-title">Top 10 Cryptocurencies in the world</h2>
        <h3 className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </h3>
      </div>
      <CryptoCurrencies simplified cryptoCoins={cryptoCoins} />
      <div className="home-heading-container" style={{ marginBottom: "20px" }}>
        <h2 className="home-title">Latest Crypto News</h2>
        <h3 className="show-more">
          <Link to="/news">Show More</Link>
        </h3>
      </div>
      <News simplified />
    </>
  );
};

export default Home;
