import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";

import UserSettings from './UserSettings';

it("renders correctly", () => {
    const tree = shallow(<UserSettings />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("renders without crashing", () => {
    shallow(<UserSettings />);
});