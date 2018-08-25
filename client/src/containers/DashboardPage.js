import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    
    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <Col className="text-center contentBg pt-3 align-items-center" md="10">
                {this.props.authenticated && <h3>Welcome, {this.props.user.userNumber}</h3>}
            </Col>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.user.user,
        authenticated: state.user.authenticated
    }
}

export default connect(mapStateToProps)(Dashboard);

