import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { search } from '../actions/searchActions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchParam: ''
    };
  }

  render() {
    return (
      <InputGroup style={{ margin: '0 20px' }}>
        <Input placeholder="Search for a product" onChange={(event) => {
          this.setState({
            searchParam: event.target.value
          });
        }} />
        <InputGroupAddon addonType="append">
          <Button onClick={() => this.props.dispatch(search(this.state.searchParam))}>
            <FaSearch className="searchIcon" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchParam: state.search.searchParam
  }
}

export default withRouter(connect(mapStateToProps)(SearchBar));