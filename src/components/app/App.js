import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import ListTrips from './components/ListTrips';
import ListAircraft from './components/ListAircraft';
import ListAirports from './components/ListAirports';

import { Menu } from 'antd';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { GrMenu } from 'react-icons/gr';

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
        </Menu>
        <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/trips">
          <ListTrips />
        </Route>
        <Route path="/airports">
          <ListAirports />
        </Route>
        <Route path="/aircraft">
          <ListAircraft />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    );
  }
}