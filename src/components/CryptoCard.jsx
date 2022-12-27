import { Card, Col } from "antd";
import millify from "millify";
import React from "react";
import { useNavigate } from "react-router-dom";

const CryptoCard = ({ currency }) => {
  const navigate = useNavigate();
  const cryptoCoinRequest = () => {
    navigate(`/crypto/${currency?.uuid}`);
  };

  return (
    <Col key={currency?.uuid} className="crypto-card" xs={24} sm={12} lg={6}>
      <div onClick={() => cryptoCoinRequest()}>
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
      </div>
    </Col>
  );
};

export default CryptoCard;
