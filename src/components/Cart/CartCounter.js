import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { GetCartItems } from '../../ducks/cart';

class CartCounter extends Component {
  componentDidMount() {
    this.props.GetCartItems();
  }

  render() {
    return (
      <Link to="/cart" className="cart" aria-live="polite">
        <span className="cart-name" aria-hidden="true">
          Cart (
        </span>
        <span className="hide-content">The cart contains </span>
        <span className="cart-count">{this.props.cart.counter || '...'}</span>
        <span className="hide-content">items.</span>
        <span className="cart-name" aria-hidden="true">
          )
        </span>
      </Link>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetCartItems
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);
