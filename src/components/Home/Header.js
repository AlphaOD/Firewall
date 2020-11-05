import React, {useState}  from 'react';
import {Menu, Avatar, Image, Popover } from 'antd';
import { UserOutlined, MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export default function Header(props) {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState('Home');

  const handleClick = e => {
    //To change into only using hook
    console.log('click ', e);
    setCurrent(e.key);
  };
  
  const { SubMenu } = Menu;
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
          {/* Routes to be programmed when starting the extra pages */}
          <Menu style={{'background-color': '#c14000'}} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            
              <Menu.Item key="Home" icon={<MailOutlined />}>
                  <Link to="/Home">
                    Home
                  </Link>
              </Menu.Item>
              
              <Menu.Item key="app" icon={<AppstoreOutlined />}>
                  <Link to="/ressource">
                    Ressources
                  </Link>
              </Menu.Item>

            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Submenu">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Login/Register
                {/* To be done dynamicaly when linked to backend */}
              </a>
            </Menu.Item>
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