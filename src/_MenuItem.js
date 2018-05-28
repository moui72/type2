import {GoHome, GoPerson, GoPaintcan, GoCode} from "react-icons/lib/go/";
import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

export default class MenuItem extends Component {
  render() {
    const Css = this.props.full
      ? "navItem full col-12 col-md"
      : "dropdown-item"
    let Icon = <GoPerson color="white"></GoPerson>
    const IconProps = {
      color: "black",
      size: ".9rem",
      style: {
        marginRight: '.5rem'
      }
    };
    switch (this.props.text.toLowerCase()) {
      case "home":
        Icon = <GoHome {...IconProps}></GoHome>;
        break;
      case "designs":
        Icon = <GoPaintcan {...IconProps}></GoPaintcan>;
        break;
      case "apps":
        Icon = <GoCode {...IconProps}></GoCode>;
        break;
      default:
        Icon = '';
    }
    return this.props.full
      ? (
        <li className={Css}>

          <NavLink to={this.props.address}>
            {Icon}
            {this.props.text}
          </NavLink>
        </li>
      )
      : (
        <NavLink to={this.props.address} className={Css}>
          {Icon}
          {this.props.text}
        </NavLink>
      )

  }

}