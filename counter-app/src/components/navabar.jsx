import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-primary badge-sm m-2">
          {props.counters.length}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
