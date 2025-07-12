import React from "react";

class ClassBasedCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>Class based component</h1>
        <h2>{this.state.count}</h2>
        <button
          className="px-5 py-2 bg-blue-500 font-bold rounded-xl mr-2"
          onClick={this.increment}
        >
          Increase
        </button>
        <button
          className="px-5 py-2 bg-blue-500 font-bold rounded-xl mr-2"
          onClick={this.decrement}
        >
          Decrease
        </button>
      </div>
    );
  }
}

export default ClassBasedCounter;
