import React, { Component } from 'react';
import { GetProductRestocks } from '../../moltin';

class OutOfStock extends Component {
  constructor(props) {
    super(props);

    const restocks = GetProductRestocks(this.props.product.id);
    const now = new Date();
    const futureRestocks = restocks.filter(
      restock => new Date(restock.expected_date) > now
    );

    this.state = {
      restock: futureRestocks[0]
        ? futureRestocks[0] // next upcoming restock
        : restocks[0]
          ? restocks[restocks.length - 1] // previous restock
          : null, // if any
      secondsTilRestock: null
    };

    this.tick = this.tick.bind(this);
    this.intervalHandle = setInterval(this.tick, 1000); // 1 second
  }

  tick() {
    var seconds = 0;
    if (this.state.restock) {
      seconds = parseInt(
        (new Date(this.state.restock.expected_date).getTime() -
          new Date().getTime()) /
          1000,
        10
      );

      if (seconds < 0) clearInterval(this.intervalHandle);

      seconds--;
      this.setState({
        secondsTilRestock: seconds
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  render() {
    const { restock, secondsTilRestock } = this.state;

    var restockDate;
    if (restock)
      restockDate = new Date(restock.expected_date).toLocaleDateString();

    const days = Math.floor(secondsTilRestock / 60 / 60 / 24);
    const hours = Math.floor(secondsTilRestock / 60 / 60) - days * 24;
    const minutes =
      Math.floor(secondsTilRestock / 60) - (days * 24 + hours) * 60;
    const seconds =
      secondsTilRestock - ((days * 24 + hours) * 60 + minutes) * 60;

    const pluralPrint = (n, unit, unitPlural) => {
      return n >= 1 ? n + ' ' + (n >= 2 ? unitPlural : unit) : '';
    };

    const daysDisplay = pluralPrint(days, 'day', 'days');
    const hoursDisplay = pluralPrint(hours, 'hour', 'hours');
    const minutesDisplay = pluralPrint(minutes, 'minute', 'minutes');
    const secondsDisplay = pluralPrint(seconds, 'second', 'seconds');

    const countdownDisplay =
      daysDisplay || hoursDisplay || minutesDisplay || secondsDisplay || null;

    return (
      <p className="out-of-stock">
        Sorry, this item is currently out of stock!
        <br />
        {secondsTilRestock !== null && (
          <span>
            {secondsTilRestock > 0 ? 'Next restock' : 'Last stocked'}
            {secondsTilRestock > 0 && days < 3
              ? ' in: ' + countdownDisplay
              : ': ' + restockDate // else just print the date
            }
          </span>
        )}
      </p>
    );
  }
}

export default OutOfStock;
