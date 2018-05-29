import React, {Component} from "react";
import {GoX} from "react-icons/lib/go";
import {Link} from 'react-router-dom'
import MobileMenu from "./_MobileMenu.js";
import smallLogo from "./assets/type-logo.small.plain.svg";
import {TransitionGroup, CSSTransition} from "react-transition-group"
export default class Page extends Component {
  render() {

    console.log(this.props)
    const title = typeof this.props.display === "string"
      ? this.props.display
      : this.props.title;
    return (
      <div className="page rounded shadow-lg">
        <div className="pageMenu rounded-top ">
          <div className="row">
            <div className="col">
              <MobileMenu></MobileMenu>
            </div>
            <div className="col text-center log">
              <img src={smallLogo} alt="TyPe Logo" className="small-logo"/>
            </div>
            <div className="col text-right">
              <Link to="/">
                <button className="btn btn-link">
                  <GoX></GoX>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="pageContent">
          <h1>{title}</h1>
          {this.props.children}
        </div>
      </div>
    )
  }
}