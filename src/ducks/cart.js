// see https://github.com/erikras/ducks-modular-redux

// actions
export const FETCH_CART_START = 'cart/FETCH_CART_START';
export const FETCH_CART_END = 'cart/FETCH_CART_END';
export const CART_UPDATED = 'cart/CART_UPDATED';

const initialState = {
  cart: null,
  fetching: false,
  fetched: false,
  error: null,
  empty: true,
  newQuantity: false,
  cartCounter: 0
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_START:
      return {
        ...state,
        fetching: true,
        fetched: false,
        newQuantity: action.gotNew
      };

    case FETCH_CART_END:
      return {
        ...state,
        cart: action.payload,
        fetching: false,
        fetched: true,
        newQuantity: action.gotNew,
        counter: action.payload.data.reduce(
          // sum up the quantity of all items in the cart
          (sum, item) => sum + item.quantity,
          0
        )
      };

    case CART_UPDATED:
      return {
        ...state,
        newQuantity: action.gotNew
      };

    default:
      return { ...state, newQuantity: false };
  }
};

// action creators
export const fetchCartStart = (gotNew = false) => ({
  type: FETCH_CART_START,
  gotNew: gotNew
});

export const fetchCartEnd = (cart, gotNew = true) => ({
  type: FETCH_CART_END,
  payload: cart,
  gotNew: gotNew
});

export const cartUpdated = (gotNew = false) => ({
  type: CART_UPDATED,
  gotNew: gotNew
});

// side effects:

export const GetCartItems = () => (dispatch, getState, api) => {
  dispatch(fetchCartStart());

  return api.GetCartItems().then(cart => dispatch(fetchCartEnd(cart)));
};

// api-adds to the cart without triggering a state refresh
export const addToCart = (productId, quantity) => (dispatch, getState, api) => {
  return dispatch => api.AddCart(productId, quantity);
};

export const addToCartAndRefresh = (productId, quantity) => (
  dispatch,
  getState,
  api
) => {
  api
    .AddCart(productId, quantity)
    .then(cart => {
      // console.log(cart);

      dispatch(cartUpdated(false));
    })
    .then(() => {
      // fetch cart items from api
      // note: these may have updated in the meantime

      dispatch(fetchCartStart());

      api.GetCartItems().then(cart => dispatch(fetchCartEnd(cart)));
    })
    .catch(e => {
      console.log(e);
    });
};
