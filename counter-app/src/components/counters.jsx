import React, { Component } from "react";

class Counters extends Component {
  state = {
    counter: 0
  };
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };  
  render() {
    const { counter } = this.state;
    let classes = 'badge badge-';
    if(counter === 0){
        classes +='warning';
    } else {classes +='primary'};

    return (
      <div>
        <span className={classes}>{counter===0 ? 'Zero' : counter}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleIncrement}
        >
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleDecrement}
          disabled = {counter <= 0 ? true : null}
        >
          <i className="fa fa-minus" aria-hidden="true" />
        </button>        
      </div>
    );
  }
}

export default Counters;
