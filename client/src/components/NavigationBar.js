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
import { Col } from 'reactstrap'


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
        <Navbar color="dark" dark toggleable>
          <NavbarBrand style={{ color: "white", cursor: "pointer" }} onClick={() => { this.props.history.push('/') }}>SMOS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavOptions />
          </Collapse>
        </Navbar>
      </Col>
    );
  }
}

export default withRouter(connect()(NavigationBar));