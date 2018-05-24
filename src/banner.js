import React, {Component} from "react";
import Menu from "./menu.js";
import logo from "./assets/type-logo.plain.nosubtext.svg";
import smallLogo from "./assets/type-logo.small.plain.svg";

export default class Banner extends Component {

  render() {
    const bClasses = this.props.full
      ? "App-logo d-none d-md-block"
      : "d-none";

    const sClasses = this.props.full
      ? "App-small-logo d-block d-md-none"
      : "App-small-logo d-block";

    return (
      <div>
        <header className="App-header">
          <img src={logo} className={bClasses} alt="banner"/>
          <img src={smallLogo} className={sClasses} alt="logo" height="64px"/>
          <Menu full={this.props.full}></Menu>
        </header>
      </div>
    )
  }
}