import store from '../store';

export const GetCartItems = () => {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () =>
        store.cart.cart
          ? resolve(store.cart.cart)
          : reject({
              error: 'Cart Items not found.' // TODO inaccurate
            })
    );
  });
};

// TODO mock the rest
