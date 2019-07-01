import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductImage from '../Products/ProductImage';
import { FETCH_CART_START, FETCH_CART_END } from '../../ducks/cart';
import Quantity from '../global/Quantity';

import { updateCartQuantity } from '../../ducks/cart';

class CartItems extends Component {
  render() {
    const items = this.props.cart.cart.data;
    const products = this.props.products.products;
    const updateCartQuantity = this.props.updateCartQuantity;

    return (
      <div>
        {items.map(item => {
          const productArray = products.data.filter(
            product => product.id === item.product_id
          );
          const product = productArray[0];
          const background = product.background_colour;
          const TotalPriceHidden = item.quantity > 1 ? '' : 'hidden';

          return (
            <div className="cart-item" key={item.id}>
              <div className="product-image" aria-hidden="true">
                <ProductImage
                  alt="item.description"
                  products={products}
                  product={product}
                  background={background}
                />
              </div>
              <div className="cart-details">
                <div className="cart-title">
                  <h3>{item.name}</h3>
                </div>

                <div className="cart-quantity">
                  <Quantity
                    quantity={item.quantity}
                    target={item.id}
                    onUpdate={updateCartQuantity}
                  />
                </div>
                <div className="cart-price">
                  <p className="price">
                    <span className={`item-price ${TotalPriceHidden}`}>
                      <span className="hide-content">Price per item </span>$<span className="product-price">
                        {item.unit_price.amount / 100}
                      </span>
                      <span aria-hidden="true"> / </span>
                    </span>
                    <span className="hide-content">Product subtotal </span>$<span className="total-product-price">
                      {item.unit_price.amount / 100 * item.quantity}
                    </span>
                  </p>
                </div>
              </div>
              <div className="cart-delete">
                <button
                  className="remove"
                  type="button"
                  onClick={() => {
                    updateCartQuantity(item.id, 0);
                  }}>
                  <span className="hide-content">Delete item</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15.55635 15.55635">
                    <rect
                      fill="currentColor"
                      x="-2.22183"
                      y="6.77817"
                      width="20"
                      height="2"
                      transform="translate(7.77817 -3.22183) rotate(45)"
                    />
                    <rect
                      fill="currentColor"
                      x="-2.22183"
                      y="6.77817"
                      width="20"
                      height="2"
                      transform="translate(18.77817 7.77817) rotate(135)"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateCartQuantity
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
