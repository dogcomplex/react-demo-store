import React from 'react';

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.quantity
    };
    this.handleChange.bind(this);
  }

  handleChange(newValue) {
    this.setState({ value: newValue });
    const { onUpdate, target } = this.props;
    onUpdate(target, newValue);
  }

  render() {
    const { max } = this.props;
    const { value } = this.state;
    return (
      <div className="quantity-input">
        <p className="hide-content">Product quantity.</p>
        <p className="hide-content">
          Change the quantity by using the buttons, or alter the input directly.
        </p>
        <button
          type="button"
          className="decrement number-button"
          onClick={() => this.handleChange(value - 1)}
          disabled={value === 1}>
          <span className="hide-content">Decrement quantity</span>
          <span aria-hidden="true">-</span>
        </button>
        <input
          className="quantity"
          name="number"
          type="number"
          min="1"
          max={max ? max : undefined}
          value={value}
          size="2"
          // onClick={event => event.target.value = null}
          onChange={event => {
            var n = event.target.value;
            if (!n) {
              n = '';
            }
            if (n > max) n = max;
            // if (n < 1)
            //  n = 1;
            this.handleChange(n);
          }}
          onKeyPress={event => {
            if (event.which === 13) {
              // Enter
              event.preventDefault();
            }
          }}
        />
        <button
          type="button"
          className="increment number-button"
          onClick={() => this.handleChange(value + 1)}
          disabled={value >= max}>
          <span className="hide-content">Increment quantity</span>
          <span aria-hidden="true">+</span>
        </button>
      </div>
    );
  }
}

export default Quantity;
