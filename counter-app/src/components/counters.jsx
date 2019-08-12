import React, { Component } from "react";
import Counter from "../widgets/counter";

const Counters = (props) => {
    const {counters, onIncrement, onDecrement, onDelete, onReset} = props;
    return ( <main className="container">
    {counters.length !== 0 ? (
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
    ) : null}
    
    {counters.map(counter => (
      <Counter
        key={counter.id}
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    ))}
  </main> );
}
 
export default Counters;

