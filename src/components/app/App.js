import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';

import { Menu, Space } from 'antd';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { GrMenu } from 'react-icons/gr';
import Loader from './components/Loader';
import { UserOutlined } from '@ant-design/icons';
import Login from './components/Login';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const ListTrips = React.lazy(() => import('./components/ListTrips'));
const ListAircraft = React.lazy(() => import('./components/ListAircraft'));
const ListAirports = React.lazy(() => import('./components/ListAirports'));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current: 'home'};
  }  

  handleClick = e => {
    this.setState({current: e.key});
  };

  render() {
    return (
      <Router>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="home" icon={<GrMenu />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="trips" icon={<FaRegListAlt />}>
            <Link to="/trips">Trips</Link>
          </Menu.Item>
          <Menu.Item key="airports" icon={<MdAirlineSeatReclineExtra />}>
            <Link to="/airports">Airports</Link>
          </Menu.Item>
          <Menu.Item key="aircraft" icon={<GiCommercialAirplane />}>
            <Link to="/aircraft">Aircraft</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<AiOutlineInfoCircle/>}>
            <Link to="/about">About</Link>
          </Menu.Item> 
          <Menu.Item key="account" icon={<UserOutlined/>} className='accountItem'>
            <Link to="/account">Account</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/about">
            <Suspense fallback={
                <div className="content">
                  <Space className="space_main">
                      <Loader /> 
                  </Space>
                </div>} >
                <About />
            </Suspense>          
          </Route>
          <Route path="/trips">
            <Suspense fallback={
                <div className="content">
                  <Space className="space_main">
                      <Loader /> 
                  </Space>
                </div>} >
                <ListTrips />
            </Suspense>
          </Route>
          <Route path="/airports">
            <Suspense fallback={
                <div className="content">
                  <Space className="space_main">
                      <Loader /> 
                  </Space>
                </div>} >
                <ListAirports />
            </Suspense>          
          </Route>
          <Route path="/aircraft">
            <Suspense fallback={
                <div className="content">
                  <Space className="space_main">
                      <Loader /> 
                  </Space>
                </div>} >
                <ListAircraft />
            </Suspense>              
          </Route>
          <Route  path="/login">
            <div className="content">
              <Login />
            </div>
          </Route>
          <Route path="/">
            <Suspense fallback={
                <div className="content">
                  <Space className="space_main">
                      <Loader /> 
                  </Space>
                </div>} >
              <Home />
            </Suspense>
          </Route>          
        </Switch>
      </Router>
    );
  }
}