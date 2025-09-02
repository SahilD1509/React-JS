// BeautyProductsClass.js

import React, { Component } from 'react';

class BeautyProductsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        const beautyItems = data.products.filter(
          (product) => product.category.toLowerCase() === 'beauty'
        );
        this.setState({ products: beautyItems });
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <h2>Beauty Products (Class Component)</h2>
        {products.length > 0 ? (
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Brand</th>
                <th>Price ($)</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.brand}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading beauty products...</p>
        )}
      </div>
    );
  }
}

export default BeautyProductsClass;
