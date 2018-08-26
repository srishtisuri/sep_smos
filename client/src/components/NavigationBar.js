import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import NavOptions from './NavOptions';
import { Col } from 'reactstrap';
import { FaHome } from 'react-icons/fa';
import { redirect } from '../actions/redirectActions';


class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Col>
        <Navbar color="dark shadow" toggleable>
          <NavbarBrand onClick={() => this.props.dispatch(redirect(this.props.history, '/'))}><FaHome className="mr-1" style={{fontSize:'16px'}}/>  smos</NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
          <NavOptions />
          {/* </Collapse> */}
        </Navbar>
      </Col>
    );
  }
}

export default withRouter(connect()(NavigationBar));