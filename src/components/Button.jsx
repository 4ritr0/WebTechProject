import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.state = { key1: 0 };
  }

  render() {
    return (
      <>
        <h2>{this.state.key1}</h2>
        <button onClick={this.func1}> + </button>
      </>
    );
  }

  func1 = () => {
    this.setState((prevState) => ({ key1: prevState.key1 + 1 }));
  };
}

export default Button;
