import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';


class CartPage extends Component {

    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <Col className="contentBg pl-4 pr-4 pt-3 align-items-center" >
                <h3>My Cart</h3>
                <hr />
            </Col>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.user.user,
        authenticated: state.user.authenticated,
        mobi: state.mobi.mobi
    }
}

export default connect(mapStateToProps)(CartPage);

