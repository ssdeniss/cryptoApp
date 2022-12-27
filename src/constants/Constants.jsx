import React from "react";
import {
  DollarCircleOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  CheckOutlined,
  StopOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import millify from "millify";
import { Col } from "antd";

const Stats = ({ coin }) => {
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coin?.coins[0]?.price && millify(coin?.coins[0]?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: coin?.coins[0]?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        coin?.coins[0]["24hVolume"] && millify(coin?.coins[0]["24hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        coin?.coins[0]?.marketCap && millify(coin?.coins[0]?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coin?.coins[0]?.listedAt && millify(coin?.coins[0]?.listedAt)
      }`,
      icon: <TrophyOutlined />,
    },
  ];
  return (
    <Col className="coin-value-statistics" style={{ width: "100%" }}>
      <Col className="coin-value-statistics-heading">
        <h3 className="coin-details-heading" style={{ textAlign: "center" }}>
          {coin?.coins[0]?.name} Value Statistics
        </h3>
        <p style={{ textAlign: "center" }}>
          An overview showing the stats of {coin?.coins[0]?.name}
        </p>
      </Col>
      {stats.map(({ icon, title, value }) => (
        <Col className="coin-stats">
          <Col className="coin-stats-name">
            <div>{icon}</div>
            <h4>{title}</h4>
          </Col>
          <p className="stats">{value && value}</p>
        </Col>
      ))}
    </Col>
  );
};

const GenericStats = ({ coin }) => {
  const genericStats = [
    {
      title: "Number Of Markets",
      value: coin?.coins[0]?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: coin?.coins[0]?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: coin?.coins[0]?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        coin?.coins[0]?.supply?.total && millify(coin?.coins[0]?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coin?.coins[0]?.supply?.circulating &&
        millify(coin?.coins[0]?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];
  return (
    <Col className="other-stats-info" style={{ width: "100%" }}>
      <Col className="coin-value-statistics-heading">
        <h3 className="coin-details-heading" style={{ textAlign: "center" }}>
          Other Statistics
        </h3>
        <p style={{ textAlign: "center" }}>
          An overview showing the stats of all cryptocurrencies
        </p>
      </Col>
      {genericStats.map(({ icon, title, value }) => (
        <Col className="coin-stats">
          <Col className="coin-stats-name">
            <div>{icon}</div>
            <h4>{title}</h4>
          </Col>
          <p className="stats">{value && value}</p>
        </Col>
      ))}
    </Col>
  );
};

export { GenericStats, Stats };
