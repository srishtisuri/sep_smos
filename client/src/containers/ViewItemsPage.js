import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col } from 'reactstrap';
import SideBar from '../components/SideBar';
import Item from '../components/Item';
import { getItems } from '../actions/itemActions';
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
        if (!this.props.authenticated) {
            this.props.history.push('/')
        }
    }

    componentWillUnmount() {
        this.props.dispatch({ type: "CLEAR_ITEMS" })
    }

    generateItems = (amount) => {
        axios.get('/api/items/generateData/'+amount)
        .then(this.props.dispatch(getItems()))
        .catch(err=>console.log(err))

    }

    removeItems = () => {
        axios.get('/api/items/deleteData/')
        .then(this.props.dispatch(getItems()))
        .catch(err=>console.log(err))

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
                    {this.props.items.map(item => <Item key={item._id} item={item} mobi={this.props.mobi} />)}
                </div>
            </Col>
        );
    }
}


const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    items: state.items.items,
    fetched: state.items.fetched,
    mobi: state.mobi.mobi
})


export default connect(mapStateToProps)(ViewItemsPage);

