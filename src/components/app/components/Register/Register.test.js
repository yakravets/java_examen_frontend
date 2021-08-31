import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";

import Register from './Register';

it("renders correctly", () => {
    const tree = shallow(<Register />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("renders without crashing", () => {
    shallow(<Register />);
});