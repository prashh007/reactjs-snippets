import React from "react";

const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  let classes = "badge badge-";
  if (counter.value === 0) {
    classes += "warning";
  } else {
    classes += "primary";
  }
  return (
    <div className="row">
      <div className="col-1">
        <span className={classes}>
          {counter.value === 0 ? "Zero" : counter.value}
        </span>
      </div>
      <div className="col">
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onIncrement(counter)}
        >
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={()=>onDecrement(counter)}
          disabled={counter.value <= 0 ? true : null}
        >
          <i className="fa fa-minus" aria-hidden="true" />
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={()=>onDelete(counter)}          
        >
          <i className="fa fa-trash" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
