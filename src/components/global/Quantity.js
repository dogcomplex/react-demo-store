import React from 'react';

export default ({ quantity, target, onUpdate }) => (
  <div className="quantity-input">
    <p className="hide-content">Product quantity.</p>
    <p className="hide-content">
      Change the quantity by using the buttons, or alter the input directly.
    </p>
    <button
      type="button"
      className="decrement number-button"
      onClick={() => onUpdate(target, quantity - 1)}>
      <span className="hide-content">Decrement quantity</span>
      <span aria-hidden="true">-</span>
    </button>
    <input
      className="quantity"
      name="number"
      type="number"
      min="1"
      value={quantity}
      defaultValue={quantity}
      size="2"
      onChange={event => onUpdate(target, event.target.value)}
      onKeyPress={event => {
        if (event.which === 13) {
          // Enter
          onUpdate(target, event.target.value);
          event.preventDefault();
        }
      }}
      onBlur={event => onUpdate(target, event.target.value)}
    />
    <button
      type="button"
      className="increment number-button"
      onClick={() => onUpdate(target, quantity + 1)}>
      <span className="hide-content">Increment quantity</span>
      <span aria-hidden="true">+</span>
    </button>
  </div>
);
