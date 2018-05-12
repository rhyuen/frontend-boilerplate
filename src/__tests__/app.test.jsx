import React from "react";
import ReactDOM from "react-dom";
import App from "../App.jsx";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

// it("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<App/>, div);
//     ReactDOM.unmountComponentAtNode(div);
// });


describe("<App/>", () => {
    it("should render the App", () => {
        const wrapper = shallow(<App/>, {context: {}, disableLifecycleMethods: true});
        console.log(wrapper.debug());
    });
});