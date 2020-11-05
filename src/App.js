import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Map from './components/map';
import 'antd/dist/antd.css';
import { Layout, BackTop } from 'antd';
import Banner from './components/Home/Banner';
import Headr from './components/Home/Header';
import Main from './components/Home/Main';
import Ressources from './components/Home/Ressource';
import './components/Home/style/style';


function App() {

  const { Content } = Layout;
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };
  return (
    <div className="home-page">
      <Headr key="header" />
      
        <Content style={{ padding: '0 5vh' }}>
          <Banner key="banner" />
          <div className="site-layout-content">
            <Main key="Main" />
          </div>
          <Ressources key="Ressources" />
        </Content>

      <BackTop>
      <div style={style}>UP</div>
    </BackTop>
      
      
    </div>
  );
}

export default App;
