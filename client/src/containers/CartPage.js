import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button, Table } from 'reactstrap';
import { notify } from '../actions/notificationActions';
import CartItem from '../components/CartItem';
import { FaTrashAlt } from 'react-icons/fa';
import { clearCart } from '../actions/userActions';


class CartPage extends Component {
    
    componentDidMount() {
        if(!this.props.authenticated && !this.props.loading){
            this.props.history.push('/')
            this.props.dispatch(notify("danger", "You are not authenticated!"))
        } 
    }

    emptyCart() {
        this.props.dispatch(clearCart())
    };
    

    render() {
        return (
            <Col className="contentBg pl-4 pr-4 pt-3 align-items-center" >
                <div className="d-flex">
                    <h3 className="mr-2">My Cart</h3>
                    <div className="ml-auto">
                        <Button size="sm" color="danger" onClick={()=>this.emptyCart()}><FaTrashAlt /></Button>
                    </div>
                </div>
                <hr />
                <div className="flexwrap justify-content-center">
                <Table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authenticated && this.props.user.cart.map(item => item?<CartItem key={item._id} item={item} mobi={this.props.mobi} />:null)}
                    </tbody>
                </Table>
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

