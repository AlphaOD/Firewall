import React, {useState}  from 'react';
import {Menu, Avatar, Image, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function Header(props) {
  const [visible, setVisible] = useState(
    false);

  var Profile = (<div>
                <p>To be populated</p>
                <a onClick={setVisible}>Close</a>
                </div>);
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <a href="./index.js">
            <span>Firewall</span>
          </a>
          <span>Firewall</span>
        </h1>
        <Menu mode="horizontal" style={{'background-color': 'rgb(255, 111, 0)'}} defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Ressources</Menu.Item>
          <Menu.Item key="3">Pannel</Menu.Item>
        </Menu>


        <Popover
        content={Profile}
        title="Profile of -"
        trigger="click"
        visible={visible}
        onVisibleChange={setVisible}
      >
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Popover>

      </div>
    </header>
  );
}