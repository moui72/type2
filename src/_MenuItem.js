import {GoHome, GoPerson, GoPaintcan, GoCode} from "react-icons/lib/go/";
import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

export default class MenuItem extends Component {
  render() {
    let Icon = '';
    const IconProps = {
      size: ".9rem",
      style: {
        marginRight: '.5rem',
        marginLeft: this.props.full
          ? '-1.4rem'
          : '0'
      },
      className: 'menu-icon'
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
        Icon = <GoPerson {...IconProps}></GoPerson>;
    }
    return this.props.full
      ? (
        <li className="navItem full col-12 col-md">
          <NavLink to={this.props.address} className="rounded">
            {Icon}
            {this.props.text}
          </NavLink>
        </li>
      )
      : (
        <NavLink to={this.props.address} className="dropdown-item">
          {Icon}
          {this.props.text}
        </NavLink>
      )

  }

}