import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";

import Loader from './Loader';

it("renders correctly", () => {
    const tree = shallow(<Loader />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("renders without crashing", () => {
    shallow(<Loader />);
});