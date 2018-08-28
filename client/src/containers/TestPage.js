import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { notify } from '../actions/notificationActions';


class TestPage extends Component {

    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/')
            this.props.dispatch(notify("danger", "You are not authenticated!"))

        }
    }

    render() {
        return (
            <Col className="contentBg pl-4 pr-4 pt-3 align-items-center" >
                <h3>Test</h3>
                <hr />
                <h4>This is a test container. You can find it under <code>client > src > containers > TestPage.js </code></h4>
                <br/>
                <h4>Copy and paste this file when creating your own container.</h4>
            </Col>
        );
    }
}


function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated,
    }
}

export default connect(mapStateToProps)(TestPage);

