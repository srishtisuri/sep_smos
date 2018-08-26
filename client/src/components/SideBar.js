import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaListUl } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import { FaFlask } from 'react-icons/fa';
import { connect } from 'react-redux';
import { redirect } from '../actions/redirectActions';

class SideBar extends Component {
    checkActive = (route) => {
        return this.props.location.pathname === route ? 'text-primary' : 'text-muted';
    }

    handleRedirect(location){
        this.props.dispatch(redirect(this.props.history, location))
    }

    render() {
        return (
            <Col className={"sidebar bg-light scroll " + (this.props.mobi?" mobiBar":" ")} xs={!this.props.mobi?"2":"1"}>
                <div>
                    <a onClick={()=>this.handleRedirect('/')} className={this.checkActive('/dashboard/' + this.props.userNumber)}><FaHome className={!this.props.mobi?"mr-2":""}/>{!this.props.mobi && " Dashboard"}</a>
                </div>
                <div>
                    <a onClick={()=>this.handleRedirect('/viewItems')} className={this.checkActive('/viewItems')}><FaListUl className={!this.props.mobi?"mr-2":""} />{!this.props.mobi && " View Items"}</a>
                </div>
                <div>
                    <a onClick={()=>this.handleRedirect('/cart')} className={this.checkActive('/cart')}><FaShoppingCart className={!this.props.mobi?"mr-2":""} />{!this.props.mobi && " My Cart"}</a>
                </div>
                <div>
                    <a onClick={()=>this.handleRedirect('/purchaseHistory')} className={this.checkActive('/purchaseHistory')}><FaHistory className={!this.props.mobi?"mr-2":""}/>{!this.props.mobi && " Purchase History"}</a>
                </div>
                <div>
                    <a onClick={()=>this.handleRedirect('/testContainer')} className={this.checkActive('/testContainer')}><FaFlask className={!this.props.mobi?"mr-2":""}/>{!this.props.mobi && " Test Container"}</a>
                </div>
            </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    userNumber: state.user.user.userNumber,
    mobi: state.mobi.mobi
})

export default withRouter(connect(mapStateToProps)(SideBar));