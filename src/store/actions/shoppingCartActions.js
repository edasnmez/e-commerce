import api from '../../api';

// --------------- Action Creators ----------------
export const setCart = (cart) => ({ type: 'SET_CART', payload: cart });
export const setPayment = (payment) => ({ type: 'SET_PAYMENT', payload: payment });
export const setAddress = (address) => ({ type: 'SET_ADDRESS', payload: address });

export const increment = (id) => ({ type: 'INCREMENT', payload: id });
export const decrement = (id) => ({ type: 'DECREMENT', payload: id });
export const removeItem = (id) => ({ type: 'REMOVE_ITEM', payload: id });
export const toggleCheck = (id) => ({ type: 'TOGGLE_CHECK', payload: id });
export const clearCart = () => ({ type: 'CLEAR_CART' });

// --------------- Thunk: addToCart ----------------
export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState().cart; 
  const existingItemIndex = cart.findIndex(item => item.product.id === product.id);

  let updatedCart;

  if (existingItemIndex >= 0) {
    updatedCart = cart.map((item, index) =>
      index === existingItemIndex
        ? { ...item, count: item.count + 1 }
        : item
    );
  } else {
    updatedCart = [...cart, { count: 1, checked: true, product }];
  }

  dispatch(setCart(updatedCart));
};


export const fetchCards = () => async (dispatch) => {
  try {
    const res = await api.get("/user/card");
    dispatch(setPayment(res.data || []));  
  } catch (err) {
    console.error("Kartlar alınamadı:", err);
    dispatch(setPayment([]));
  }
};

export const addCard = (cardData) => async (dispatch) => {
  try {
    await api.post("/user/card", cardData);
    dispatch(fetchCards()); // güncel listeyi tekrar çek
  } catch (err) {
    console.error("Kart eklenemedi:", err);
  }
};

export const updateCard = (cardData) => async (dispatch) => {
  try {
    await api.put("/user/card", cardData);
    dispatch(fetchCards()); // güncel listeyi tekrar çek
  } catch (err) {
    console.error("Kart güncellenemedi:", err);
  }
};
export const deleteCard = (cardId) => async (dispatch) => {
  try {
    await api.delete(`/user/card/${cardId}`);
    dispatch(fetchCards());
  } catch (err) {
    console.error("Kart silinemedi:", err);

  }
};