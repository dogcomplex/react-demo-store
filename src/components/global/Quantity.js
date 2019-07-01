import React from 'react';

export default ({ quantity, target, onUpdate, max }) => (
  <div className="quantity-input">
    <p className="hide-content">Product quantity.</p>
    <p className="hide-content">
      Change the quantity by using the buttons, or alter the input directly.
    </p>
    <button
      type="button"
      className="decrement number-button"
      onClick={() => onUpdate(target, quantity - 1)}
      disabled={quantity === 1}>
      <span className="hide-content">Decrement quantity</span>
      <span aria-hidden="true">-</span>
    </button>
    <input
      className="quantity"
      name="number"
      type="number"
      min="1"
      max={max ? max : undefined}
      defaultValue={quantity}
      size="2"
      onClick={event => {
        event.target.value = null;
      }}
      onKeyPress={event => {
        if (event.which === 13) {
          // Enter
          if (event.target.value > event.target.max)
            event.target.value = event.target.max;
          if (event.target.value < event.target.min)
            event.target.value = event.target.min;

          onUpdate(target, event.target.value);
          event.preventDefault();
        }
      }}
    />
    <button
      type="button"
      className="increment number-button"
      onClick={() => onUpdate(target, quantity + 1)}
      disabled={quantity >= max}>
      <span className="hide-content">Increment quantity</span>
      <span aria-hidden="true">+</span>
    </button>
  </div>
);
