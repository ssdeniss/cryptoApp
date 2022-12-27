import React, { useEffect, useState } from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import { useSelector } from "react-redux";
import Search from "antd/es/transfer/search";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const exchangesList = useSelector(
    (coins) => coins?.cryptoExchanges?.cryptoExchanges?.data?.exchanges
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCryptoCoins, setFilteredCryptoCoins] = useState([]);

  useEffect(() => {
    const filteredData = exchangesList?.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCryptoCoins(filteredData);
    console.log(filteredCryptoCoins);
  }, [searchTerm, exchangesList]);
  return (
    <>
      <div className="search-crypto">
        <Search
          placeholder="Search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Row style={{ marginBottom: "20px" }}>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Price</Col>
      </Row>
      <Row>
        {filteredCryptoCoins.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange["24hVolume"])}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.price)}</Col>
                  </Row>
                }
              >
                {
                  <a
                    href={exchange.coinrankingUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {exchange.coinrankingUrl}
                  </a>
                }
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
