import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Row, Col, Alert, InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            quantity: 1
        };
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    updateItemColour = (colour) => {
        this.setState({
            itemColour: colour
        })
    }

    isAvailable = () => {
        if (this.props.item.quantity > 0) {
            return true;
        }
        return false;
    }

    checkQuantity = () => {
        if (this.props.item.quantity > this.state.quantity) {
            return true;
        }
        return false;
    }

    
    handleAddToCart = () => {
        this.toggleModal();
        this.props.addItemToCart(this.props.item._id);
    }

    render() {
        return (
            <Card style={{ width: this.props.mobi ? "100%" : "30%", margin: '0 1% 20px 1%' }}>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody className="bg-light">
                    <CardTitle>{this.props.item.name}</CardTitle>
                    <CardSubtitle>${this.props.item.price}</CardSubtitle>
                    <CardText>{this.props.item.description}</CardText>
                    <Button onClick={this.toggleModal}>View</Button>
                    {/*  */}
                    <Modal size='lg' isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                        <ModalHeader toggle={this.toggleModal}>{this.props.item.name}</ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col md='4' xs='12'>
                                    <img
                                        className='img-thumbnail'
                                        src={require('../content/blue_artline.png')}
                                    />
                                </Col>
                                <Col md='8' xs='12'>
                                    <h1>${this.props.item.price}</h1>
                                    <p>{this.props.item.description}.</p>
                                    <div style={{ margin: '20px', width:'300px'}}>
                                        <Alert color={this.isAvailable() ? "success" : "danger"}>
                                            Availability: {this.isAvailable() ? this.props.item.quantity + " in stock" : "Out of Stock"}
                                        </Alert>
                                    </div>
                                    <div style={{ margin: '20px', width:'300px'}}>
                                        <InputGroup size='lgs'>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Quantity:</InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                type="text"
                                                onChange={(event) => {
                                                    if (event.target.value > this.props.item.quantity) {
                                                        this.setState({
                                                            quantity: parseInt(this.props.item.quantity)
                                                        })
                                                    } else if (event.target.value == "") {
                                                        this.setState({
                                                            quantity: 1
                                                        })
                                                    } else {
                                                        this.setState({
                                                            quantity: parseInt(event.target.value)
                                                        })
                                                    }
                                                }}
                                                value={this.state.quantity}
                                            />
                                            <Button
                                                style={{ width: '35px' }}
                                                className="ml-1"
                                                onClick={(event) => {
                                                    if (this.state.quantity > 1) {
                                                        this.setState({
                                                            quantity: this.state.quantity - 1
                                                        })
                                                    }
                                                }}
                                                disabled={this.state.quantity > 1 ? false : true}
                                            >-</Button>
                                            <Button
                                                style={{ width: '35px' }}
                                                className="ml-1"
                                                onClick={(event) => {
                                                    if (this.checkQuantity()) {
                                                        this.setState({
                                                            quantity: this.state.quantity + 1
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
                            <Button color="success" onClick={()=>this.handleAddToCart()}>Add to cart</Button>
                        </ModalFooter>
                    </Modal>
                    {/*  */}
                </CardBody>
            </Card>
        );
    }
}

export default Item;

