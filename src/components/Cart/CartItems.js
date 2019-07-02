import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';

import ProductImage from '../Products/ProductImage';
import Quantity from '../global/Quantity';

import { updateCartQuantity } from '../../ducks/cart';

export const CartItems = ({
  cart,
  products: { products },
  updateCartQuantity
}) => {
  const items = cart.cart.data;

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
              <Link to={'/product/' + product.id}>
                <ProductImage
                  alt="item.description"
                  products={products}
                  product={product}
                  background={background}
                />
              </Link>
            </div>
            <div className="cart-details">
              <div className="cart-title">
                <h3>{item.name}</h3>
              </div>
              <div className="cart-quantity">
                <Quantity
                  quantity={item.quantity}
                  target={item.id}
                  max={product.meta.stock.level}
                  onUpdate={updateCartQuantity}
                />
                {product.meta.stock.level === item.quantity && (
                  <span className="stock-info-cart">Max: {item.quantity}</span>
                )}
              </div>
              <div className="cart-price">
                <p className="price">
                  <span className={`item-price ${TotalPriceHidden}`}>
                    <span className="hide-content">Price per item </span>$<span className="product-price">
                      {Math.round(item.unit_price.amount) / 100}
                    </span>
                    <span aria-hidden="true"> / </span>
                  </span>
                  <span className="hide-content">Product subtotal </span>$<span className="total-product-price">
                    {Math.round(item.unit_price.amount * item.quantity) / 100}
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
};

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

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(CartItems)
);
