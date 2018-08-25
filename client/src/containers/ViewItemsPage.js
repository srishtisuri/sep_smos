import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import SideBar from '../components/SideBar';
import Item from '../components/Item';
import { getItems } from '../actions/itemActions';
import { withRouter } from 'react-router-dom';

class ViewItemsPage extends Component {
    constructor(props) {
      super(props)
    
      if (!this.props.fetched) {
        this.props.dispatch(getItems());
        }
    }

    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/')
        }
    }

    componentWillUnmount() {
        this.props.dispatch({ type: "CLEAR_ITEMS" })
    }

    render() {
        return (
            <Col className="viewitems contentBg pl-4 scroll" md="10">
                <h3>Items For Purchase</h3>
                <hr />
                <div className="text-center flexwrap">
                    {this.props.items.map(item => <Item key={item._id} item={item} />)}
                </div>
            </Col>
        );
    }
}


const mapStateToProps = (state) => ({
        authenticated: state.user.authenticated,
        items: state.items.items,
        fetched: state.items.fetched
})


export default connect(mapStateToProps)(ViewItemsPage);

