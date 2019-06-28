export const UPDATE_QUANTITY = 'product/UPDATE_QUANTITY';

const initialState = {
  quantity: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUANTITY:
      return action.payload > 0
        ? { ...state, quantity: action.payload }
        : initialState;

    default:
      return { ...state };
  }
};

export const updateQuantity = quantity => ({
  type: UPDATE_QUANTITY,
  payload: quantity
});
