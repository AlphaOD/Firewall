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

import AlertModal from './components/User/AlertModal'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history'


function App() {


  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  const { Content } = Layout;
  /*const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };*/
  return (
    <div className="home-page">
      <Router history={createBrowserHistory}>
        {/* Main header component with navigation and profile */}
        <Headr key="header" />
        <Switch>
        
          <Route path="/Home">
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

          <Route exact path='/Login'>
            <Login showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>

          <PrivateRoute path="/dashboard">
              <Dashboard/>
          </PrivateRoute>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
