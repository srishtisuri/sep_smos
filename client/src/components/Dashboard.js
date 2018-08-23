import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <Row className="text-center">
                <Col style={{ border: "1px solid red" }} md="3">
                    <h5>Side Menu</h5>
                    <li><Link to="/">Link 1</Link></li>
                    <li><Link to="/">Link 2</Link></li>
                    <li><Link to="/">Link 3</Link></li>
                </Col>
                <Col style={{ border: "1px solid blue" }} md="9">
                <h5>Content</h5>
                {this.props.authenticated && <h3>Welcome, {this.props.user.firstname}</h3>}
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

