import { Card, Col, Input, Row } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CryptoCurrencies = ({ simplified }) => {
  const cryptoCoins = useSelector((coins) => coins?.cryptoCoins?.cryptoCoins);
  const [filteredCryptoCoins, setFilteredCryptoCoins] = useState([]);
  const count = simplified ? 10 : 100;
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const filteredData = cryptoCoins?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCryptoCoins(filteredData);
    console.log(filteredCryptoCoins);
  }, [searchTerm, cryptoCoins]);
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row className="crypto-card-container" gutter={[20, 20]}>
        {filteredCryptoCoins?.slice(0, count).map((currency) => (
          <Col
            key={currency?.uuid}
            className="crypto-card"
            xs={24}
            sm={12}
            lg={6}
          >
            <Link to={`/crypto/${currency?.name}`}>
              <Card
                title={`${currency?.rank}. ${currency?.name}`}
                extra={
                  <img
                    className="crypto-image"
                    alt="cryptoimage"
                    src={currency?.iconUrl}
                  />
                }
                hoverable
              >
                <p>Price : ${millify(currency?.price)}</p>
                <p>Market Cap : ${millify(currency?.marketCap)}</p>
                <p>Daily Change : {millify(currency?.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
