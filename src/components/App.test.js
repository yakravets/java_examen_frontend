import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";

import App from './app';

export default class AppConsumer{
    constructor() {
        this.app = new App();
    }
}

it("renders correctly", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
});

beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        App.mockClear();
    }
);

it('We can check if the consumer called a method on the class instance', () => {
    // Show that mockClear() is working:
    expect(App).not.toHaveBeenCalled();
  
    const testAppConsumer = new AppConsumer();
    // Constructor should have been called again:
    expect(App).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called the class constructor', () => {
    const testAppConsumer = new AppConsumer();
    expect(App).toHaveBeenCalledTimes(1);
});
