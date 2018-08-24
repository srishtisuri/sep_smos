import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
                <Col className="sidebar" md="3">
                    <li><Link to="/viewitems">View Items</Link></li>
                    <li><Link to="/">My Cart</Link></li>
                    <li><Link to="/">Purchase History</Link></li>
                </Col>
        );
    }
}
export default SideBar;