import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, BackTop } from 'antd';
import Banner from './components/Home/Banner';
import Headr from './components/Home/Header';
import Page1 from './components/Home/Page1';
import Page3 from './components/Home/Ressource';
import './components/Home/style/style';


function App() {

  const { Header, Content, Footer } = Layout;
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
      
      <Layout className="layout">
        <Content style={{ padding: '0 5vh' }}>
          <Banner key="banner" />
          <div className="site-layout-content">
            <Page1 key="page1" />
          </div>
          <Page3 key="page3" />
        </Content>
      </Layout>

      <BackTop>
      <div style={style}>UP</div>
    </BackTop>
      
      
    </div>
  );
}

export default App;
