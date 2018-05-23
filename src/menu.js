import React, {Component} from "react";
import Content from "./data.js"

class MenuItem extends Component {
  render() {
    let classes = this.props.full
      ? 'navItem full'
      : 'navItem sm';

    console.log(this.props)
    return (
      <li className={classes}>
        <a href={this.props.address}>{this.props.text}</a>
      </li>
    )
  }
}
export default class Menu extends Component {

  render() {
    let items = Object
      .keys(Content)
      .map(item => {
        return <MenuItem
          className="col"
          full={this.props.full}
          key={item}
          text={item}
          address={'/' + item}></MenuItem>
      })

    return (
      <div className="container">
        <ul className="nav main-nav row justify-content-center">{items}</ul>
      </div>
    )
  }
}