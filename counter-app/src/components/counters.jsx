import React, { Component } from "react";
import Counter from "../widgets/counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 23 },
      { id: 4, value: 10 }
    ]
  };
  handleIncrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map(c => (c.value = 0));
    this.setState({ counters });
  };
  handleDelete = counter => {
    let counters = [...this.state.counters];
    counters = counters.filter(c => {
      if (c.id !== counter.id) return c;
    });
    this.setState({ counters });
  };
  render() {
    const { counters } = this.state;

    return (
      <main className="container">
        {counters.length !== 0 ? (
          <button className="btn btn-primary btn-sm" onClick={this.handleReset}>
            Reset
          </button>
        ) : null}
        
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </main>
    );
  }
}

export default Counters;
