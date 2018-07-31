import React, { Component } from "react";
import "./css/Cell.css";
import { Link } from "react-router-dom";

let id = 0;
const newid = () => {
  return id++;
};

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: newid(),
      flag: false
    };
  }

  checkedBox() {
    this.setState({ flag: !this.state.flag });
  }

  render() {
    const { flag } = this.state;
    const { data } = this.props;
    let linkPartoch = '/partoch/'+ data[0]
    return (
      <Link to= {linkPartoch} 
        className="Cell list-group-item list-group-item-action"
        onClick={() => this.checkedBox()}
      >
        <div className="row">
          <label className="col-sm"> {data[1]} </label>
          <label className="col-sm"> {data[2]} </label>
          <input
            className="col-sm form-control"
            type="checkbox"
            checked={flag}
          />
        </div>
      </Link>
    );
  }
}
