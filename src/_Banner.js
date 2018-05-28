import React, {Component} from "react";
import Menu from "./_Menu.js";
import logo from "./assets/type-logo.plain.nosubtext.svg";

export default class Banner extends Component {

  render() {

    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo d-block" alt="banner"/>
        </header>
        <Menu full={this.props.full} className="main-menu"></Menu>
      </div>
    )
  }
}