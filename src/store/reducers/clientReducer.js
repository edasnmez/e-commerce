
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

const initialState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: 'light',
  language: 'en',
  loading: false,
  error: null,
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };

    case LOGIN_ERROR:
      return { ...state, error: action.payload, loading: false };

    case LOGOUT:
      return { ...state, user: null, loading: false, error: null };

    case SET_ROLES:
      return { ...state, roles: action.payload };

    case SET_THEME:
      return { ...state, theme: action.payload };

    case SET_LANGUAGE:
      return { ...state, language: action.payload };

    default:
      return state;
  }
};

export default clientReducer;
