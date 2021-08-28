import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";

import Page404 from './page404';

it("renders correctly", () => {
    const tree = shallow( < Page404 /> );
    expect(toJson(tree)).toMatchSnapshot();
});

it("renders without crashing", () => {
    shallow( < Page404 /> );
});