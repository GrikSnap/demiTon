import React, { Component } from "react";
import "./css/ListContainer.css";
import Cell from "./Cell.js";

export default class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  addTodos() {
    this.state.list.push({ num: 7, message: "new" });
    this.setState({ list: this.state.list });
  }

  getListContainer(data, type) {
    //No data
    if (data === null) {
      return (
        <div className="alert alert-warning" role="alert">
          Aucune donnée
        </div>
      );
    }

    if (!type) {
      return (
        <div className="ListContainer">
          <button
            onClick={() => {
              this.addTodos();
            }}
          >
            +
          </button>
          <ul className="Playlist list-group">
            {data.map(line => (
              <Cell
                data={line}
                key={line[0]}
              />
            ))}
          </ul>
        </div>
      );
    }
    //Dico
    else if (type === "dico") {
      return (
        <div className="ListContainer">
          <ul className="Dico list-group">
            {data.map(line => (
              <Cell
                data={line}
                key={line[0]}
              />
            ))}
          </ul>
        </div>
      );
    }
  }

  render() {
    // Question le "type" tu le récupère ou ???
    const { data, type } = this.props;
    return this.getListContainer(data, type);
  }
}
