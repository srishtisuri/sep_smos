import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/userActions';
import {
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import { checkAuth } from '../actions/userActions';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa';


class NavOptions extends React.Component {

    handleLogout = () => {
        this.props.dispatch(logout(this.props.history))
    }

    render() {
        const logOutBtn = (
            <NavItem>
                <NavLink onClick={() => { this.handleLogout() }}>
                    <Button className="navBtn" color="danger" size="sm"><FaSignOutAlt/>{!this.props.mobi?" Log Out":""}</Button>
                </NavLink>
            </NavItem>
        );

        const signUpBtn = (
            <NavItem>
                <NavLink onClick={() => { this.props.dispatch(checkAuth()); this.props.history.push('/signup') }}>
                    <Button className="navBtn" color="primary" size="sm"><FaUserPlus/> {!this.props.mobi?" Sign Up":""}</Button>
                </NavLink>
            </NavItem>
        );

        const loginBtn = (
            <NavItem>
                <NavLink onClick={() => { this.props.dispatch(checkAuth()); this.props.history.push('/')}}>
                    <Button className="navBtn" color="success" size="sm"><FaSignInAlt/>{!this.props.mobi?" Log In":""}</Button>
                </NavLink>
            </NavItem>
        );
        return (
            <Nav className="ml-auto" style={{flexDirection: "row"}} navbar>
                {this.props.authenticated && logOutBtn}
            </Nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated,
        mobi: state.mobi.mobi
    }
}

export default withRouter(connect(mapStateToProps)(NavOptions));