import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Item extends Component {
    render() {
        return (
            <Card style={{width:'300px', marginRight: '20px', marginBottom: '20px'}}>
              {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
              <CardBody className="bg-light">
                <CardTitle>{this.props.item.name}</CardTitle>
                <CardSubtitle>${this.props.item.price}</CardSubtitle>
                <CardText>{this.props.item.description}</CardText>
                <Button>View</Button>
              </CardBody>
            </Card>
        );
    }
}

export default Item;

