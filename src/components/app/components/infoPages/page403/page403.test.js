import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";

import Page403 from './page403';

it("renders correctly", () => {
    const tree = shallow( < Page403 /> );
    expect(toJson(tree)).toMatchSnapshot();
});

it("renders without crashing", () => {
    shallow( < Page403 /> );
});