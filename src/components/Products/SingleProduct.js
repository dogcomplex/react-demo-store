import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductImage from './ProductImage';
import OutOfStock from './OutOfStock';
import Quantity from '../global/Quantity';
import { addToCartAndRefresh } from '../../ducks/cart';
import { updateQuantity } from '../../ducks/product';

const CurrencyPrice = ({ product }) => {
  try {
    return (
      <p className="price">
        <span className="hide-content">Unit price </span>
        {'$' + product.meta.display_price.with_tax.amount / 100}
      </p>
    );
  } catch (e) {
    return <div className="price">Price not available</div>;
  }
};

export const SingleProduct = ({
  product: { background_color, quantity },
  products: { products },
  router: { location: { pathname } },
  updateQuantity,
  addToCartAndRefresh
}) => {
  const urlID = pathname.slice(9, 100); // TODO make a better url function
  const product = products.data.filter(product => product.id === urlID)[0];
  const outOfStock = product.meta.stock.availability !== 'in-stock';
  const stock = product.meta.stock.level;

  return (
    <main role="main" id="container" className="main-container push">
      <section className="product">
        <div className="content">
          <div className="product-listing">
            <div className="product-image">
              <ProductImage
                product={product}
                products={products}
                background={background_color}
              />
            </div>
            <div className="product-description">
              <h2>{product.name}</h2>
              <p className="manufacturer">
                <span className="hide-content">Manufactured </span>By{' '}
                <span className="word-mark">
                  I<span className="love">Love</span>Lamp
                </span>
              </p>
              <CurrencyPrice product={product} />
              <div className="description">
                <p className="hide-content">Product details:</p>
                <p>{product.description}</p>
              </div>
              {outOfStock ? (
                <OutOfStock product={product} />
              ) : (
                <form className="product" noValidate>
                  <Quantity
                    quantity={quantity}
                    onUpdate={updateQuantity}
                    max={stock}
                  />
                  {stock === quantity && (
                    // if hitting max, explain why
                    // else hide stock from user
                    <span className="stock-info">Max Available: {stock}</span>
                  )}
                  <button
                    type="submit"
                    className="submit"
                    onClick={e => {
                      addToCartAndRefresh(product.id, quantity);
                      e.preventDefault();
                    }}>
                    Add to cart
                  </button>
                </form>
              )}
            </div>
          </div>
          {false && (
            <div className="product-info">
              <div className="product-details">
                <div className="header">
                  <h3>Product details</h3>
                </div>
                <div className="details-body">
                  <div className="row">
                    <div className="label">Weight</div>
                    <div className="value">1.5kg</div>
                  </div>
                  <div className="row">
                    <div className="label">Finish</div>
                    <div className="value">{product.finish}</div>
                  </div>
                  <div className="row">
                    <div className="label">Material</div>
                    <div className="value">{product.material}</div>
                  </div>
                  <div className="row">
                    <div className="label">Bulb type</div>
                    <div className="value">{product.bulb}</div>
                  </div>
                  <div className="row">
                    <div className="label">Max Watt</div>
                    <div className="value">{product.max_watt}</div>
                  </div>
                  <div className="row">
                    <div className="label">Bulb Qty</div>
                    <div className="value">{product.bulb_qty}</div>
                  </div>
                  <div className="row">
                    <div className="label">SKU</div>
                    <div className="value sku">{product.sku}</div>
                  </div>
                </div>
              </div>
              <div className="product-details">
                <div className="header">
                  <h3>Dimensions (cm)</h3>
                </div>
                <div className="details-body">
                  <div className="row">
                    <div className="label">Height</div>
                    <div className="value">156</div>
                  </div>
                  <div className="row">
                    <div className="label">Width</div>
                    <div className="value">80</div>
                  </div>
                  <div className="row">
                    <div className="label">Depth</div>
                    <div className="value">80</div>
                  </div>
                </div>
              </div>
              <div className="product-details">
                <div className="header">
                  <h3>Delivery & returns</h3>
                </div>
                <div className="details-body">
                  <div className="row">
                    <div className="label">Dispatch</div>
                    <div className="value">Within 2 weeks</div>
                  </div>
                  <div className="row">
                    <div className="label">Delivery</div>
                    <div className="value">$5.95</div>
                  </div>
                </div>
                <div className="footer">
                  <p>
                    Read the <a href="/">delivery and returns policy</a>.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToCartAndRefresh,
      updateQuantity
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
