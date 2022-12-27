import React, { useEffect, useState } from "react";
import { Avatar, Typography, Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../assets/cryptocurrency.png";
import { HomeOutlined } from "@ant-design/icons";
import {
  BulbOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  MenuOutlined,
} from "@ant-design/icons/lib/icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 800) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }, [screenSize]);
  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
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
        <div className="menu-control-container" onClick={handleMenu}>
          <MenuOutlined />
        </div>
      </div>
      {menu && (
        <div>
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
      )}
    </div>
  );
};

export default Navbar;
