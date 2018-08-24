import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="price">
                    <h1>{"$" + this.props.item.Price}</h1>
                </div>
                <div className="details">
                    <h5>{this.props.item.Name}</h5>
                    <p>{this.props.item.Description}</p>
                </div>
            </div>
        );
    }
}

export default Item;

