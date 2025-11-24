const initialState = {
  cart: [],
  payment: [],
  address: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, cart: action.payload };

    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };

    case 'SET_ADDRESS':
      return { ...state, address: action.payload };

    case 'INCREMENT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };

    case 'DECREMENT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload),
      };

    case 'TOGGLE_CHECK':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;