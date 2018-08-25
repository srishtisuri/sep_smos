import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <Col className="sidebar" md="2">
                <div className="p-2">
                    <Link to="/viewitems">View Items</Link>
                </div>
                <div className="p-2">
                    <Link to="/">My Cart</Link>
                </div>
                <div className="p-2">
                    <Link to="/">Purchase History</Link>
                </div>
            </Col>
        );
    }
}
export default SideBar;