import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";

import App from '.';

it("renders correctly", () => {
    const tree = shallow( < App / > );
    expect(toJson(tree)).toMatchSnapshot();
});