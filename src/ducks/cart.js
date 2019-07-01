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
  counter: 0,
  updatedAt: null
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
      const responseTime = new Date(action.payload.meta.updated_at);
      if (state.updatedAt && responseTime < new Date(state.updatedAt)) {
        return {
          ...state,
          fetching: false,
          fetched: true
        };
      }
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
        ),
        empty: !action.payload,
        updatedAt: action.payload.meta.updated_at
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
export const addToCart = (productId, quantity) => (dispatch, getState, api) =>
  api.AddCart(productId, quantity);

export const addToCartAndRefresh = (productId, quantity) => (
  dispatch,
  getState,
  api
) => {
  api
    .AddCart(productId, quantity)
    .then(cart => dispatch(cartUpdated(false)))
    .then(() => dispatch(fetchCartStart()))
    .then(() => api.GetCartItems())
    .then(cart => dispatch(fetchCartEnd(cart)))
    .catch(e => {
      console.log(e);
    });
};

export const updateCartQuantity = (ID, quantity) => (
  dispatch,
  getState,
  api
) => {
  const n = parseInt(quantity, 10);
  if (isNaN(n) || n < 0) {
    return;
  }
  dispatch(fetchCartStart());

  api
    .UpdateCart(ID, n)
    .then(cart => dispatch(fetchCartEnd(cart)))
    .catch(e => {
      console.log(e);
    });
};
