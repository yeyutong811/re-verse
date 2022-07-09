import { Layout, Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { Header } = Layout;
  let location = useLocation();
  const mappings = {
    "/": "1",
    "/aboutus": "2",
    "/profile:": "3"
  };

  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={mappings[location.pathname]}
      >
        <Menu.Item key="1">
          <span> Home </span>
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="2">
          <span> About Us </span>
          <Link to="/aboutus" />
        </Menu.Item>
        <Menu.Item key="3">
          <span> Profile </span>
          <Link to="/profile" />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Header;
