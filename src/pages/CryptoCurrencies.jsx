import { Row } from "antd";
import Search from "antd/es/transfer/search";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CryptoCard from "../components/CryptoCard";

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
          <Search
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row className="crypto-card-container" gutter={[20, 20]}>
        {filteredCryptoCoins?.slice(0, count).map((currency) => (
          <CryptoCard currency={currency} />
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
