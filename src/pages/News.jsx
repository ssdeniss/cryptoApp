import { Avatar, Card, Col, Row } from "antd";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MessageOutlined } from "@ant-design/icons";
import Search from "antd/es/transfer/search";

const News = ({ simplified }) => {
  const cryptoNews = useSelector((news) => news?.cryptoNews?.cryptoNews);
  const count = simplified ? 6 : 12;
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  const [filteredCryptoNews, setFilteredCryptoNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptoNews?.value?.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCryptoNews(filteredData);
    console.log(filteredCryptoNews);
  }, [searchTerm, cryptoNews]);
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
      <Row gutter={[20, 20]}>
        {filteredCryptoNews?.slice(0, count)?.map((news, i) => (
          <Col key={i} xs={24} sm={12} lg={8}>
            <Card className="news-card" hoverable>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <h4 style={{ marginBottom: "10px" }}>{news?.name}</h4>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <Row style={{ alignItems: "center" }}>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt="news"
                    />
                    <div className="provider-name">
                      {news?.provider[0]?.name}
                    </div>
                  </Row>
                </div>
                <p>{moment(news?.datePublished).startOf("ss").fromNow()}</p>
              </a>
            </Card>
          </Col>
        ))}
        {filteredCryptoNews?.length === 0 && (
          <div
            style={{
              fontSize: "24px",
              textTransform: "uppercase",
              textAlign: "center",
              margin: "0 auto",
              height: "100%",
            }}
          >
            they are not news <MessageOutlined />
          </div>
        )}
      </Row>
    </>
  );
};

export default News;
