import React, {Component} from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import Content from "./_data.js"
import GoThreeBars from "react-icons/lib/go/three-bars";

class MenuItem extends Component {
  render() {
    return this.props.full
      ? (
        <li className='navItem full'>
          <a href={this.props.address}>{this.props.text}</a>
        </li>
      )
      : (
        <DropdownItem href={this.props.address}></DropdownItem>
      )
  }

}
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.toggle = this
      .toggle
      .bind(this);
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const Items = Object
      .keys(Content)
      .map(item => {
        return <MenuItem full={this.props.full} key={item} text={item} address={'/' + item}></MenuItem>
      });
    const MobileItems = Object
      .keys(Content)
      .map(item => {
        return <MenuItem full={false} key={'m-' + item} text={item} address={'/' + item}></MenuItem>
      });
    return (
      <div className="container">
        <div className="d-none d-md-block">
          <ul className="main-nav row justify-content-center">{Items}</ul>
        </div>
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          className="d-md-none tog">
          <DropdownToggle>
            <GoThreeBars/>
          </DropdownToggle>
          <DropdownMenu right>
            {MobileItems}
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }

}