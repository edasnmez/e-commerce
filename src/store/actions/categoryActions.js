
import api from "../../api";


export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";


export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });

    try {
      const res = await api.get("/categories");
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FETCH_CATEGORIES_FAILURE,
        payload: err.message
      });
    }
  };
};

export const setSelectedCategory = (category) => ({
  type: 'SET_SELECTED_CATEGORY',
  payload: category,
});