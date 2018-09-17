import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { notify } from '../actions/notificationActions';
import { Col } from 'reactstrap';
import { Alert } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            dropdownOpen: false,
            itemColour: "Select A Colour",
            item: { _id: "5b87b2cb7dd26d0020822196", name: "Notepad", type: "Notepad", price: 50, quantity: 30, colours: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Rainbow'], description: "Notepad is one of the many items you can buy", __v: 0 },
            quantity: 1
        };
    }

    componentDidMount() {
        if (!this.props.authenticated && !this.props.loading) {
            this.props.history.push('/')
            this.props.dispatch(notify("danger", "You are not authenticated!"))
        }
    }
    toggleModal = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


    updateItemColour = (colour) => {
        this.setState({
            itemColour: colour
        })
    }

    getMenuItems = () => {
        return this.state.item.colours.map(colour => <DropdownItem key={colour} onClick={() => this.updateItemColour(colour)}>{colour}</DropdownItem>)
    }

    isAvailable = () => {
        if (this.state.item.quantity > 0){
            return true;
        }
        return false;
    }

    checkQuantity = () => {
        if (this.state.item.quantity > this.state.quantity){
            return true;
        }
        return false;
    }

    render() {
        return (
            <Col className="contentBg pl-4 pr-4 pt-3 align-items-center" >
                <h3>Test</h3>
                <hr />
                <Button color="warning" onClick={this.toggleModal}>View</Button>
                <Modal size='lg' isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>Artline Pen</ModalHeader>
                    <ModalBody style={{ height: '400px' }}>
                        <Row>
                            <Col md='4'>
                                <img
                                    className='img-thumbnail'
                                    src={require('../content/blue_artline.png')}
                                />
                                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} style={{paddingTop: '30px'}}>
                                    <DropdownToggle caret>{this.state.itemColour}</DropdownToggle>
                                    <DropdownMenu>{this.getMenuItems()}</DropdownMenu>
                                </ButtonDropdown>
                            </Col>
                            <Col md='8'>
                                <h1>$20</h1>
                                <p>
                                    This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen. This is a blue pen.
                                </p>
                                <div style={{margin: '20px', width: '70%'}}>
                                    <Alert color={this.isAvailable() ? "success" : "danger"}>
                                        Availability: {this.isAvailable() ? this.state.item.quantity + " in stock" : "Out of Stock"}
                                    </Alert>
                                </div>
                                <div style={{margin: '20px', width: '70%'}}>
                                    <InputGroup size='lgs'>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>Quantity:</InputGroupText>
                                        </InputGroupAddon>
                                        <Input 
                                        type="text"
                                        onChange={(event)=>{
                                            if(event.target.value>this.state.item.quantity){
                                                this.setState({
                                                    quantity:parseInt(this.state.item.quantity)
                                                })
                                            } else if (event.target.value=="") {
                                                this.setState({
                                                    quantity:1
                                                })
                                            } else {
                                                this.setState({
                                                    quantity:parseInt(event.target.value)
                                                })
                                            }
                                        }}
                                        value={this.state.quantity}
                                        />
                                        <Button 
                                        style={{width:'35px'}} 
                                        className="ml-1"
                                        onClick={(event)=>{
                                            if(this.state.quantity>1){
                                                this.setState({
                                                    quantity:this.state.quantity-1
                                                })
                                            }
                                        }}
                                        disabled={this.state.quantity>1 ? false : true}
                                        >-</Button>
                                        <Button 
                                        style={{width:'35px'}} 
                                        className="ml-1"
                                        onClick={(event)=>{
                                            if(this.checkQuantity()){
                                                this.setState({
                                                    quantity:this.state.quantity+1
                                                })
                                            }
                                        }}
                                        disabled={this.checkQuantity() ? false : true}
                                        >+</Button>
                                    </InputGroup>
                                </div>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" onClick={this.toggleModal}>View My Cart</Button>
                        <Button color="success" onClick={this.toggleModal}>Add To Cart</Button>
                    </ModalFooter>
                </Modal>
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

export default connect(mapStateToProps)(TestPage);