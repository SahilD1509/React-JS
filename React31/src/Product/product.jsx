import React from "react";

class Product extends React.Component {
    state = {
        Product_Name: "Marker Pen",
        Price: 30,
        Qty: 1
    }
    
    incHandler = () => {
        this.setState({ Qty: this.state.Qty + 1 });
    }

    decrHandler = () => {
        this.setState({ Qty: this.state.Qty - 1 });
    }

    render() {
        return (
            <div>
                <h2>Product Qty: {this.state.Qty}</h2>
                <button onClick={this.decrHandler}>-</button>
                <button onClick={this.incHandler}>+</button>
            </div>
        );
    }
}

export default Product;
