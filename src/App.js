import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("created");
  }
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  subtract = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    console.log("component unmounting..")
  }
  render() {
    console.log("I am rendering");
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
