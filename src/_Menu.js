import React, {Component} from "react";
import Content from "./_data.js"
import MenuItem from "./_MenuItem"

export default class Menu extends Component {

  render() {
    const Items = Object
      .keys(Content)
      .map(item => {
        return <MenuItem full key={item} text={item} address={'/' + item}></MenuItem>
      });

    return (
      <div className="container">
        <div>
          <ul className="main-nav row justify-content-center">{Items}</ul>
        </div>
      </div>
    )
  }

}