import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import config from './config.js';

import 'antd/dist/antd.css';
import './App.css';

import { Menu, Space, Layout } from 'antd';
import { AiOutlineInfoCircle, AiOutlineUserAdd } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { FaRegListAlt, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { GrMenu } from 'react-icons/gr';
import Loader from './components/Loader';
import { UserOutlined } from '@ant-design/icons';
import Login from './components/Login';
import Page404 from './components/infoPages/page404';
import Page403 from './components/infoPages/page403';
import Page500 from './components/infoPages/page500';
import RegistrationForm from './components/Register';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const ListTrips = React.lazy(() => import('./components/ListTrips'));
const ListAircraft = React.lazy(() => import('./components/ListAircraft'));
const ListAirports = React.lazy(() => import('./components/ListAirports'));
const UserSettings = React.lazy(() => import ('./components/UserSettings'));
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
      userName: 'John Smith',
      logined: false,
      admin: true,
	  config: config
    };
  }  

  componentDidMount(){

    let token = localStorage.getItem('token');
    let tokenFound = token != null && token.length != 0;

    let refreshToken = localStorage.getItem('refreshToken');
    let refreshTokenFound = refreshToken != null && refreshToken.length != 0;
    if(tokenFound && refreshTokenFound){
      this.validateToken(token, refreshToken);
    }
  }

  validateToken(token, refreshToken){

  }

  handleClick = e => {
    this.setState({current: e.key});

    switch(e.key){
      case 'logout':
        this.setState({logined: false});
        break;
      case 'login':
        //this.setState({logined: true});
        break;
    }
  };

  logout(){
	  
	const config = this.state;
	let url = config.api_url + config.auth_logout;
	console.log(url);
	
  }
  
  onLogin = (data) => {
	  console.log(data);
	  if(data.success){
		localStorage.setItem("token", data.token);
		localStorage.setItem("refreshToken", data.token);
		
		this.setState(
		{
			userName: `${data.firstName} ${data.lastName}`,
			logined: true,
			admin: data.role === 'ROLE_ADMIN'
		});
	  }	 
  }

  AppMenu() {
    return(
      <>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="test">
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
            <Menu.SubMenu 
              key="sub1" 
              icon={<UserOutlined />} 
              title={this.state.logined === true? this.state.userName:"Profile"}>
                {this.state.logined === true?
                  <>
                    <Menu.Item key="tickets" icon={<IoTicketOutline />}>My tickets</Menu.Item>
                    <Menu.Item key="settings" icon={<FiSettings />}>
                      <Link to="/settings">My settings</Link>
                    </Menu.Item>
                    <Menu.Item key="logout" icon={<FaSignOutAlt />}>Logout</Menu.Item>
                  </>
                  :
                  <>
                    <Menu.Item key="login" icon={<FaSignInAlt />}>
                      <Link to="/login">Login</Link>
                    </Menu.Item>
                    <Menu.Item key="register" icon={<AiOutlineUserAdd />}>
                      <Link to="/register">Register</Link>
                    </Menu.Item>
                  </>}
            </Menu.SubMenu>            
          </Menu>
      </>
    );
  }

  AppSwitch(){
    return(
      <>
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
              <Login
				loginUrl = {this.state.config.api_url + this.state.config.auth_login}
				loginCallback={this.onLogin}/>
          </Route>
          <Route  path="/account">
            <Login />
          </Route>
          <Route path='/403'>
              <Page403 />
          </Route>
          <Route path='/404'>
            <Page404 />
          </Route>
          <Route path='/500'>
            <Page500 />
          </Route>
          <Route path='/settings'>
            <Suspense fallback={
              <div className="content">
                <Space className="space_main">
                    <Loader /> 
                </Space>
              </div>} >
              <UserSettings name={this.state.userName}/>
            </Suspense>
          </Route>
          <Route path="/register">
            <RegistrationForm />
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
      </>
    );
  }

  render() {
    return (
      <Router>
        <Layout>
          <Layout.Content>            
            {this.AppMenu()}
            {this.AppSwitch()}
          </Layout.Content>
        </Layout>
      </Router>
    );
  }
}