import React, {useState}  from 'react';
import {Menu, Avatar, Popover } from 'antd';
import { UserOutlined, MailOutlined, AppstoreOutlined} from '@ant-design/icons';
import {
  Link
} from "react-router-dom";

import {/*API_BASE_URL,*/ ACCESS_TOKEN_NAME} from '../../constants/api';

// import { Link } from 'react-router';
// import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';


export default function Header(props) {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState('Home');

  const handleClick = e => {
    //To change into only using hook
    console.log('click ', e);
    setCurrent(e.key);
  };
  
  // May be needed
  // const { SubMenu } = Menu;

  //Logout button if on Dashboard page
  function renderLogout() {
    return
    //To disband to a separate component
    if(props.location.pathname === '/Dashboard'){
        return(
            <div className="ml-auto">
                <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
            </div>
        )
    }
  }
  var Profile = (<div>
    <p>To be populated</p>
    <a onClick={setVisible}>Close</a>
    {renderLogout()}
    </div>);

  function handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN_NAME)
    props.history.push('/login')
  }

  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <a href="./index.js">
          </a>
        </h1>
          {/* Routes to be programmed when starting the extra pages */}
          <Menu style={{'backgroundColor': '#c14000'}} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            
              <Menu.Item key="Home" icon={<MailOutlined />}>
                  <Link to="/">
                    Home
                  </Link>
              </Menu.Item>
              
              <Menu.Item key="ressource" icon={<AppstoreOutlined />}>
                  <Link to="/ressource">
                    Ressources
                  </Link>
              </Menu.Item>

              <Menu.Item key="register" icon={<AppstoreOutlined />}>
                  <Link to="/register">
                    Register
                  </Link>
              </Menu.Item>

              <Menu.Item key="login" icon={<AppstoreOutlined />}>
                  <Link to="/login">
                    Login
                  </Link>
              </Menu.Item>

              <Menu.Item key="Map" icon={<AppstoreOutlined />}>
                  <Link to="/Map">
                    Map Only
                  </Link>
              </Menu.Item>

              <Menu.Item key="test" icon={<AppstoreOutlined />}>
                  <Link to="/test">
                    DEV
                  </Link>
              </Menu.Item>


            {/*<SubMenu key="SubMenu" icon={<SettingOutlined />} title="Submenu">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">
                    <Link to="/map">
                      Map
                    </Link>
                  </Menu.Item>
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
                 To be done dynamicaly when linked to backend
              </a>
            </Menu.Item>*/}

        <Popover
        content={Profile}
        title="Profile of -"
        trigger="click"
        visible={visible}
        onVisibleChange={setVisible}
      >
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Popover>
      </Menu>

      </div>
    </header>
  );
}
