import React, {Component} from "react";
export default class Page extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="page">
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}