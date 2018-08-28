import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { notify } from '../actions/notificationActions';


class PurchaseHistoryPage extends Component {

    componentDidMount() {
        if (!this.props.authenticated && !this.props.loading) {
            this.props.history.push('/')
            this.props.dispatch(notify("danger", "You are not authenticated!"))
        }
    }

    render() {
        return (
            <Col className="contentBg pl-4 pr-4 pt-3 align-items-center" >
                <h3>Purchase History</h3>
                <hr />
            </Col>
        );
    }
}


function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated,
        loading: state.loader.loading
    }
}

export default connect(mapStateToProps)(PurchaseHistoryPage);

