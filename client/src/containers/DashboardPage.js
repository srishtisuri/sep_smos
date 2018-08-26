import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';


class Dashboard extends Component {

    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <Col className="contentBg pl-4 pr-4 pt-3 align-items-center" >
                <h3>Dashboard</h3>
                <hr />
                {this.props.authenticated && <h3>Welcome, {this.props.user.userNumber}</h3>}
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

export default connect(mapStateToProps)(Dashboard);

