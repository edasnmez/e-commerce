
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../actions/categoryActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  selectedCategory: null,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
      case 'SET_SELECTED_CATEGORY': 
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
}
