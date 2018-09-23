import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {sortItems} from '../actions/sortAction'

export default class SortDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dropDownValue: null
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  sort(){
    switch(this.dropDownValue){
      case "Alphabetical Order":
      alert("ffff");
      break;

      case "Reverse Alpahbetical Order":
      alert("dd");
      break;

      case "Price Order":
      alert("ss");
      break;
      
      case "Reverse Price Order":
      alert("ff");
      break;

    }
    
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret caret size = "sm">
          Sort by
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem dropDownValue = "Alphabetical Order" onClick = {this.sort} >Alphabet A - Z</DropdownItem>
          <DropdownItem dropDownValue = "Reverse Alpahbetical Order" onClick = {this.sort}>Alphabet Z - A</DropdownItem>
          <DropdownItem dropDownValue = "Price Order" onClick = {this.sort}>Price Highest - Lowest</DropdownItem>
          <DropdownItem dropDownValue = "Reverse Price Order" onClick = {this.sort}>Price Lowest - Highest</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
