import React from 'react';
import propTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  subtract = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1> Current Count : {this.state.count} </h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}

export default App;
