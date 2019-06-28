import React from 'react';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';

const isThereACurrencyPrice = product => {
  try {
    return (
      <div className="price">
        {product.meta.display_price.with_tax.amount / 100}
      </div>
    );
  } catch (e) {
    return <div className="price">Price not available</div>;
  }
};

const AllProducts = ({ products: { products }, css }) => {
  if (css === null || products.data.length <= 0) {
    return (
      <main role="main" id="container" className="main-container push">
        <section className="products">
          <div className="content">
            <p>You do not have any products</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main role="main" id="container" className="main-container push">
      <section className="products">
        <div className="content">
          <div className="product-list">
            {products.data.map(product => (
              <a
                className="product-item"
                href={'/product/' + product.id}
                key={product.id}>
                <div
                  className="product-image"
                  style={{
                    background: product.background_colour
                      ? product.background_colour
                      : '#d9d9d9'
                  }}>
                  <ProductImage product={product} products={products} />
                </div>
                <div className="overlay">
                  <div
                    className="overlay-background"
                    style={{ background: '#aaaaaa' }}
                  />
                  <div className="overlay-content">
                    <div className="title">{product.name}</div>
                    {isThereACurrencyPrice(product)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = ({ products }) => ({
  products
});

export default connect(mapStateToProps)(AllProducts);
