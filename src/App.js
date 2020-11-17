import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Map from './components/map';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import Banner from './components/Home/Banner';
import Headr from './components/Home/Header';
import Main from './components/Home/Main';
import Ressources from './components/Home/Ressource';
import Register from "./components/User/register";
import Login from "./components/User/login";
import './components/Home/style/style';

import Dashboard from "./components/Dashboard/Dashboard";

import PrivateRoute from './utils/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history'


import PopupPanel from './components/map/popup-panel';


function App() {

  //will be useful evntually for page titles
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  const { Content } = Layout;
  return (
    <div className="home-page">
      <Router history={createBrowserHistory}>
        {/* Main header component with navigation and profile */}
        <Headr key="header" />
        <Switch>
        
          <Route exact path="/">
            {/* Home page router */}
            <Content style={{ padding: '0 2vh' }}>
              <Banner key="banner" />
              <div className="site-layout-content">
                <Main key="Main" />
              </div>
              <Ressources key="Ressources" />
            </Content>
          </Route>

          {/* Ressource page router to be changed */}
          <Route path="/ressource">
            <Ressources key="Ressources" />
          </Route>
    
          <Route exact path='/map' component={Main} />

          <Route exact path='/Register'>
            <Register showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          {/* To be combined conditionally in next commit */}
          <Route exact path='/Login'>
            <Login showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>

          {/* Development testing page, will get rid of */}
          <Route exact path='/test'>
            <PopupPanel showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>

          {/* Private Route for only connected users */}
          <PrivateRoute path="/dashboard">
              <Dashboard/>
          </PrivateRoute>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
