import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaListUl } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';


class SideBar extends Component {
    checkActive = (route) => {
        console.log(route)
        return this.props.location.pathname === route ? 'active' : 'text-muted';
    }
    
    render() {
        return (
            <Col className="sidebar scroll bg-light" md="2">
                <div className="p-2">
                    <Link to="/" className={this.checkActive('/')}><FaHome/> Home</Link>
                </div>
                <div className="p-2">
                    <Link to="/viewItems" className={this.checkActive('/viewItems')}><FaListUl/> View Items</Link>
                </div>
                <div className="p-2">
                    <Link to="/cart" className={this.checkActive('/cart')}><FaShoppingCart/> My Cart</Link>
                </div>
                <div className="p-2">
                    <Link to="/" className={this.checkActive('/purchaseHistory')}><FaHistory/> Purchase History</Link>
                </div>
            </Col>
        );
    }
}
export default withRouter(SideBar);