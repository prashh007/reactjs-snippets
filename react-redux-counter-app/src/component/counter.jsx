import React from "react";
import { connect } from "react-redux";

const Counter = ({ counter, counterUp, counterDown, reSet }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3" style={{border: '1px solid', padding:10, margin:10, textAlign:'center'}}>
        <h4>
          Redux-Counter : <span className="badge badge-primary">{counter === 0 ? 'Zero' : counter}</span>
        </h4>
        <button className="btn btn-primary btn-sm m-2" onClick={counterUp}>
          Increment
        </button>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={counterDown}
          disabled={counter <= 0 ? true : false}
        >
          Decrement
        </button>
        <button
          className="btn btn-warning btn-sm"
          onClick={reSet}
          disabled={counter <= 0 ? true : false}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { counter: state.count };
};
const mapDispatchToProps = dispatch => {
  return {
    counterUp: () => dispatch({ type: "INC" }),
    counterDown: () => dispatch({ type: "DEC" }),
    reSet: () => dispatch({ type: "RESET" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
