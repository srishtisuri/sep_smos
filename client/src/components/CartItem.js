import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleRemoveFromCart = () => {
        this.toggle();
        //this.props.addItemToCart(this.props.item._id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>${this.props.item.price}</td>
                <td><Button color="primary" onClick={()=>this.handleRemoveFromCart()}>Remove</Button>{' '}</td>
            </tr>
        );
    }
}

export default CartItem;

