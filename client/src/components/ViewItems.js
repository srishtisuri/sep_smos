import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import SideBar from './SideBar';
import Item from './Item';
import { getItems } from '../actions/userActions';

class ViewItems extends Component {

    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/')
        }
    }
componentWillMount() {
    this.props.dispatch(getItems());
}
    render() {
        return (
            <Row>
            <SideBar/>
                <Col className="viewitems" md="9">
                <h3>Items For Purchase</h3>
                <hr/>
                <div className="text-center flexwrap">
                {this.props.items.map(item => <Item item={item}/>)}
                </div>
                </Col>
            </Row>
        );
    }
}


function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated,
        items: state.items.items
    }
}

export default connect(mapStateToProps)(ViewItems);

