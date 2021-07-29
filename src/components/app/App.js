import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';

import Home from './Home';
import About from './About';
import ListTrips from './ListTrips';
import ListAircraft from './ListAircraft';
import ListAirports from './ListAirports';

import { Menu } from 'antd';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { AudioOutlined } from '@ant-design/icons';
import { GrMenu } from 'react-icons/gr';

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

export default class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Router>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
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
          <ListAirports/>
        </Route>
        <Route path="/aircraft">
          <ListAircraft/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    );
  }
}