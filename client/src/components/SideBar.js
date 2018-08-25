import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        console.log("render");
        return (
            <Col className="sidebar" md="2">
                <div className="p-2">
                    <Link to="/viewItems" className="text-dark">View Items</Link>
                </div>
                <div className="p-2">
                    <Link to="/cart" className="text-dark">My Cart</Link>
                </div>
                <div className="p-2">
                    <Link to="/" className="text-dark">Purchase History</Link>
                </div>
            </Col>
        );
    }
}
export default SideBar;