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
                    <Button color="danger" size="sm"><FaSignOutAlt/> Log Out</Button>
                </NavLink>
            </NavItem>
        );

        const signUpBtn = (
            <NavItem>
                <NavLink onClick={() => { this.props.dispatch(checkAuth()); this.props.history.push('/signup') }}>
                    <Button color="primary" size="sm"><FaUserPlus/> Sign Up</Button>
                </NavLink>
            </NavItem>
        );

        const loginBtn = (
            <NavItem>
                <NavLink onClick={() => { this.props.dispatch(checkAuth()); this.props.history.push('/')}}>
                    <Button color="success" size="sm"><FaSignInAlt/> Login</Button>
                </NavLink>
            </NavItem>
        );
        return (
            <Nav className="ml-auto" navbar>
                {!this.props.authenticated && loginBtn}
                {!this.props.authenticated && signUpBtn}
                {this.props.authenticated && logOutBtn}
            </Nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated
    }
}

export default withRouter(connect(mapStateToProps)(NavOptions));