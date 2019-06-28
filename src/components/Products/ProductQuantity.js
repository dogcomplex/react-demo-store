import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateQuantity } from '../../ducks/product';

export const ProductQuantity = props => (
  <div className="quantity-input">
    <p className="hide-content">Product quantity.</p>
    <p className="hide-content">
      Change the quantity by using the buttons, or alter the input directly.
    </p>
    <button
      type="button"
      className="decrement number-button"
      onClick={() => {
        props.updateQuantity(props.quantity - 1);
      }}>
      <span className="hide-content">Decrement quantity</span>
      <span aria-hidden="true">-</span>
    </button>
    <input
      className="quantity"
      name="number"
      type="number"
      min="1"
      max="100"
      value={props.quantity}
      size="2"
      onChange={event => {
        props.updateQuantity(event.target.value);
      }}
    />
    <button
      type="button"
      className="increment number-button"
      onClick={() => {
        props.updateQuantity(props.quantity + 1);
      }}>
      <span className="hide-content">Increment quantity</span>
      <span aria-hidden="true">+</span>
    </button>
  </div>
);

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateQuantity
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductQuantity);
