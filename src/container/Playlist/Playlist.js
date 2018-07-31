import React, { Component } from "react";
import "./css/Playlist.css";
import ListContainer from "../ListConstainer/ListContainer";
var Test = require("../../server/Test");

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  


  
  render() {
    return (
      <div className="Playlist container">
        <h2>Playlist</h2>
        <ListContainer data={ Test.getAll() } />
      </div>
    );
  }
}
