import { Card, Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const News = ({ simplified }) => {
  const cryptoNews = useSelector((news) => news?.cryptoNews?.cryptoNews);

  return (
    <Row gutter={[20, 20]}>
      {cryptoNews?.value?.map((news, i) => (
        <Col key={i} xs={24} sm={12} lg={8}>
          <Card className="news-card" hoverable>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <h4 style={{ marginBottom: "10px" }}>{news?.name}</h4>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
