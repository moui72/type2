import Content from "./_data.js"
import {Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import React, {Component} from "react";
import {GoThreeBars} from "react-icons/lib/go/";
import MenuItem from './_MenuItem'

export default class MobileMenu extends Component {
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
    const MobileItems = Object
      .keys(Content)
      .map(item => {
        return <MenuItem
          className="dropdown-item"
          full={false}
          key={'m-' + item}
          text={item}
          address={'/' + item}></MenuItem>
      });
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="link">
          <GoThreeBars/>
        </DropdownToggle>
        <DropdownMenu>
          {MobileItems}
        </DropdownMenu>
      </Dropdown>
    );
  }
}