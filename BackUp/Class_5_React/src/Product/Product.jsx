import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        console.log("First - Constructor");
        this.state = {
            product_Name: "Marker Pen",
            price: 30,
            qty: 1
        };
    }

    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 });
    }

    decrHandler = () => {
        if (this.state.qty > 0) {
            this.setState({ qty: this.state.qty - 1 });
        }
    }

    render() {
        console.log("Second - Render method");
        return (
            <div>
                <h4>Product Component</h4>
                <h4>Product Name: {this.state.product_Name}</h4>
                <h4>Product Price: {this.state.price}</h4>
                <button onClick={this.decrHandler}>-</button>
                <h4>Product Qty: {this.state.qty}</h4>
                <button onClick={this.incrHandler}>+</button>
            </div>
        );
    }
}

export default Product;
