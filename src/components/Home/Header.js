import React from 'react';
import {Menu, Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <a href="./index.js">
            <span>Firewall</span>
          </a>
          <span>Firewall</span>
        </h1>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Ressources</Menu.Item>
          <Menu.Item key="3">Pannel</Menu.Item>
        </Menu>
        <a href="">
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </a>
      </div>
    </header>
  );
}