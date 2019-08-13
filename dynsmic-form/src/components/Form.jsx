import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.intialState = {
      name: "",
      location: ""
    };
    this.state = this.intialState;
  }
  handleChange = event => {
    // console.log("event>>>>>>", event);
    const { name, value } = event.target;
    // console.log("name and location>>>", name, value);
    this.setState({ [name] : value});
  };
  handleOnSubmit = (event) =>{
      event.preventDefault();
      this.props.handleSubmit(this.state);
      this.setState(this.intialState);
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label>
            {" "}
            Name :
            <input
              type="text"
              name="name"
              value={this.state.name}
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Location :
            <input
              type="text"
              name="location"
              value={this.state.location}
              className="form-control"
              id="location"
              aria-describedby="emailHelp"
              placeholder="Enter location"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <input className="btn btn-primary" type="button" value="submit" onClick={this.handleOnSubmit}/>
      </form>
    );
  }
}

export default Form;
