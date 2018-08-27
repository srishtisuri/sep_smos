import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class Item extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         modal: false
    //     };

    //     this.toggle = this.toggle.bind(this);
    // }

    // toggle() {
    //     this.setState({
    //         modal: !this.state.modal
    //     });
    // }
    render() {
        return (
            <Card style={{ width: this.props.mobi ? "100%" : "30%", margin: '0 1% 20px 1%'}}>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody className="bg-light">
                    <CardTitle>{this.props.item.name}</CardTitle>
                    <CardSubtitle>${this.props.item.price}</CardSubtitle>
                    <CardText>{this.props.item.description}</CardText>
                    <Button>View</Button>
                    {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal> */}
                </CardBody>
            </Card>
        );
    }
}

export default Item;

