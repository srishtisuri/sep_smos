import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import ViewItems from './ViewItems';
import { Switch, Route } from 'react-router-dom';
import SideBar from './SideBar';

class Dashboard extends Component {

    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <Row className="row">
                <SideBar/>
                <Col className="text-center" md="9">
                <h5>Content</h5>
                {this.props.authenticated && <h3>Welcome, {this.props.user.userNumber}</h3>}
                </Col>
            </Row>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.user.user,
        authenticated: state.user.authenticated,
    }
}

export default connect(mapStateToProps)(Dashboard);

