import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navabar";

class App extends Component {
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
      <React.Fragment>
        <Navbar counters={counters}/>
        <Counters
          counters={counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
