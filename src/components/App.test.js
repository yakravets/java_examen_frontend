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

it('We can check if the consumer called the class constructor', () => {
    const appConsumer = new AppConsumer();
    expect(App).toHaveBeenCalledTimes(1);
});

const mockHandleClick = jest.fn();
jest.mock('./app', ()=>{
    return jest.fn().mockImplementation(() => {
        return {handleClick: mockHandleClick};
      });
}); 