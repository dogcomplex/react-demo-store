import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Products/ProductImage';

function mapStateToProps(state) {
  return state;
}

class StyleProducts extends Component {
  render() {
    let productsToMap = [];
    let categories = this.props.categories.categories.data;
    let CurrentStyle = this.props.styles.style;
    let CurrentCategory = categories.find(category => {
      return category.name === CurrentStyle;
    });

    try {
      let CurrentCategoryProductIDs =
        CurrentCategory.relationships.products.data;
      let Products = this.props.products.products;
      let ProductsData = this.props.products.products.data;

      CurrentCategoryProductIDs.forEach(function(productref) {
        let Product = ProductsData.find(function(product) {
          return product.id === productref.id;
        });
        productsToMap.push(Product);
      });

      return (
        <div className="product-list">
          {productsToMap.map(function(product) {
            let background;

            if (product.background_colour) {
              background = product.background_colour;
            } else {
              background = '#d9d9d9';
            }

            return (
              <a
                className="product-item"
                href={'product/' + product.id}
                key={product.id}>
                <div
                  className="product-image"
                  style={{ background: background }}>
                  <ProductImage product={product} products={Products} />
                </div>
                <div className="overlay">
                  <div
                    className="overlay-background"
                    style={{ background: '#aaaaaa' }}
                  />
                  <div className="overlay-content">
                    <div className="title">{product.name}</div>
                    <div className="price">
                      {'$' + product.meta.display_price.with_tax.amount / 100}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      );
    } catch (err) {
      return (
        <div className="content">
          <h2>Your category has no attached products</h2>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(StyleProducts);
