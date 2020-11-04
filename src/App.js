import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Banner from './components/Home/Banner';
import Headr from './components/Home/Header';
import Page1 from './components/Home/Page1';
import Page3 from './components/Home/Ressource';
import './components/Home/style/style';


function App() {

  const { Header, Content, Footer } = Layout;
  return (
    <div className="home-page">
      <Headr key="header" />
      <Banner key="banner" />
      <Page1 key="page1" />
      <Page3 key="page3" />
      
    </div>
  );
}

export default App;
