import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col } from 'reactstrap';
import Item from '../components/Item';
import { getItems } from '../actions/itemActions';
import { addToCart } from '../actions/userActions';
import { notify } from '../actions/notificationActions';
import { FaPlus } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';

class ViewItemsPage extends Component {
    constructor(props) {
        super(props)

        if (!this.props.fetched) {
            this.props.dispatch(getItems());
        }
    }

    componentDidMount() {
        if(!this.props.authenticated && !this.props.loading){
                this.props.history.push('/')
                this.props.dispatch(notify("danger", "You are not authenticated!"))
        } 
    }

    componentWillUnmount() {
        this.props.dispatch({ type: "CLEAR_ITEMS" })
    }

    generateItems = (amount) => {
        axios.get('/api/items/generateData/'+amount)
        .then(()=>this.props.dispatch(getItems()))
        .then(()=>this.props.dispatch(notify("success","Items successfully generated!")))
        .catch(err=>console.log(err))

    }

    removeItems = () => {
        if(this.props.items.length!=0){
            axios.delete('/api/items/deleteData/')
            .then(()=>this.props.dispatch(notify("success", "Items successfully deleted!")))
            .then(()=>this.props.dispatch(getItems()))
            .catch(err=>console.log(err))
        } else {
            this.props.dispatch(notify("danger", "There are no items to delete!"))
        }

    }

    addItemToCart = (itemId, itemQuantity) => {
        this.props.dispatch(addToCart(itemId, itemQuantity))
    }

    render() {
        return (
            <Col className="viewitems contentBg pl-4 pr-4 scroll" xs={!this.props.mobi ? "10" : "11"}>
                <div className="d-flex">
                    <h3 className="mr-2">Items For Purchase</h3>
                    <div className="ml-auto">
                        <Button size="sm" color="primary" className="mr-2" onClick={()=>this.generateItems(prompt("Enter an amount:"))}><FaPlus /></Button>
                        <Button size="sm" color="danger" onClick={()=>this.removeItems()}><FaTrashAlt /></Button>
                    </div>
                </div>
                <hr />
                <div className="flexwrap justify-content-center">
                    {this.props.fetched && this.props.items.map(item => <Item addItemToCart={this.addItemToCart} key={item._id} item={item} mobi={this.props.mobi} />)}
                </div>
            </Col>
        );
    }
}


const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    loading: state.loader.loading,
    items: state.items.items,
    fetched: state.items.fetched,
    mobi: state.mobi.mobi
})


export default connect(mapStateToProps)(ViewItemsPage);

