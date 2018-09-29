import React, { Component } from "react";
import Form from "./Form.jsx";

class App extends Component {
  state = {
    on: false,
    input: "",
    mainColor: "blue",
    lifeCycle: ""
  };

  componentDidMount() {
    this.setState(prevState => {
      return {
        ...prevState,
        lifeCycle: "componentDidMount"
      };
    });
  }

  componentWillReceiveProps() {
    this.setState(prevState => {
      return { ...prevState, lifeCycle: "componentWillReceiveProps" };
    });
  }

  handleString = str => {
    return str === "Hello World";
  };

  render() {
    const Test = () => (
      <div>
        If you can see this text, the shallow rendering for Enzyme is NOT
        WORKING.
      </div>
    );

    return (
      <div className="root">
        <p>Hi, Just some vague front end code.</p>
        <p>The Second Element for the FEBP</p>

        <div className="block__element--modifier">
          A node for the Enzyme .exists() assertion.
        </div>

        <ul>
          <li>ONE ITEM</li>
          <li>TWO ITEM</li>
          <li>THREE ITEM</li>
        </ul>

        <div alt="logoishere">There may or may not be a logo here.</div>

        <div className="button-state">
          {this.state.on ? "Clicked." : "Unclicked."}
        </div>
        <button onClick={() => this.setState({ on: true })}>ClickMe!</button>

        <div>
          <h2>{this.state.input}</h2>
          <input
            onChange={e => this.setState({ input: e.currentTarget.value })}
            type="text"
          />
        </div>

        <div>
          <span className={this.state.mainColor}>FirstColour</span>
        </div>

        <div>
          <span data-testid="lifeCycleMethod">{this.state.lifeCycle}</span>
        </div>

        <Link hide={true} address="https://engadget.com" />
        <Test />
        <Form />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    return this.props.hide ? null : (
      <a href={this.props.address}>Button To Click</a>
    );
  }
}

export default App;
