import { Col, Row, Switch } from "antd";
import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import millify from "millify";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ...registerables
);

const LineChart = ({ coin, coinHistory }) => {
  const coinPrice = [];
  const coinTime = [];
  const [chart, setChart] = useState(false);
  for (let i = 0; i < coinHistory?.history?.length; i++) {
    coinPrice.push(coinHistory?.history[i].price);
    coinTime.push(
      new Date(coinHistory?.history[i]?.timestamp).toLocaleDateString()
    );
  }
  console.log(coinPrice);
  console.log(coinTime);
  const data = {
    labels: coinTime,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <Row className="chart-header" style={{ marginTop: "20px" }}>
        <h2 className="chart-title">{coin?.name} Price Chart</h2>
        <div className="switch-chart" style={{ display: "flex", gap: "20px" }}>
          <div className={`switch__chart-line ${chart ? "" : "active"}`}>
            Line
          </div>
          <Switch onChange={() => setChart(!chart)}></Switch>
          <div className={`switch__chart-bar ${chart ? "active" : ""}`}>
            Bar
          </div>
        </div>

        <Col className="price-container">
          <h5 className="price-change">
            Current {coin?.name} Price: ${millify(coin?.price)}
          </h5>
        </Col>
      </Row>
      {chart ? (
        <Bar data={data} options={options} />
      ) : (
        <Line data={data} options={options} />
      )}
    </>
  );
};

export default LineChart;
