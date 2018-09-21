import React, { Component } from 'react'
import { Col, Button } from 'reactstrap';
import logo from '../content/stationery.png'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { redirect } from '../actions/redirectActions';

export class NotFoundPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Col className="d-flex justify-content-center align-items-center" style={{ flexDirection: "column" }}>
                <img src={logo} />
                <br />
                <h2>404 Not Found :(</h2>
                <br />
                <Button onClick={() => { this.props.dispatch(redirect(this.props.history, '/')) }} color="info">Take Me Back</Button>
            </Col>
        );
    }
}

export default withRouter(connect()(NotFoundPage));


