import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";

import ListAirports from './ListAirports';

it("renders correctly", () => {
    const tree = shallow(<ListAirports />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("renders without crashing", () => {
    shallow(<ListAirports />);
});
