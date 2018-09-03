import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { notify } from '../actions/notificationActions';
import Item from '../components/Item';


class CartPage extends Component {

    componentDidMount() {
        if(!this.props.authenticated && !this.props.loading){
            this.props.history.push('/')
            this.props.dispatch(notify("danger", "You are not authenticated!"))
    } 
    }

    render() {
        return (
            <Col className="contentBg pl-4 pr-4 pt-3 align-items-center" >
                <h3>My Cart</h3>
                <hr />
                <div className="flexwrap justify-content-center">
                    {this.props.authenticated && this.props.user.cart.map(item => <Item key={item._id} item={item} mobi={this.props.mobi} />)}
                </div>
                
            </Col>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.user.user,
        authenticated: state.user.authenticated,
        loading: state.loader.loading
    }
}

export default connect(mapStateToProps)(CartPage);

