import React from "react";
import { Avatar, Typography, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../assets/cryptocurrency.png";
import { HomeOutlined } from "@ant-design/icons";
import {
  BulbOutlined,
  FundOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons/lib/icons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title
          style={{ marginBottom: "0px", color: "#fff" }}
          level={2}
          className="logo"
        >
          <Link to="/">Crypto App</Link>
        </Typography.Title>
        <Button className="menu-control-container"></Button>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Crypto Currencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
