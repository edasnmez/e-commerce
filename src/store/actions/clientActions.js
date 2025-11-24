import api from '../../api';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGOUT = 'LOGOUT';

export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const loginLoading = () => ({ type: LOGIN_LOADING });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginError = (error) => ({ type: LOGIN_ERROR, payload: error });
export const logout = () => {
  setAuthToken(null);
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  return { type: LOGOUT };
};

export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });


export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = token; 
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};


export const loginUser = (email, password, remember = false) => async (dispatch) => {
  dispatch(loginLoading());

  try {
    const res = await api.post('/login', { email, password });

    const user = {
      name: res.data.name,
      email: res.data.email,
      role_id: res.data.role_id,
    };

    const token = res.data.token;

    // Token'ı header'a ekle
    setAuthToken(token);

    // Remember kontrolü
    if (remember) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }

    dispatch(loginSuccess(user));
  } catch (err) {
    const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
    dispatch(loginError(errorMessage));
  }
};

// Auto login (uygulama açılışında çağrılacak)
export const autoLogin = () => async (dispatch) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (!token) {
    dispatch(logout());
    return;
  }

  dispatch(loginLoading());
  setAuthToken(token);

  try {
    const res = await api.get('/verify');

    const user = {
      name: res.data.name || res.data.user?.name,
      email: res.data.email || res.data.user?.email,
      role_id: res.data.role_id || res.data.user?.role_id,
    };
     const newToken = res.data.token || token;
     if (newToken !== token) {
      if (localStorage.getItem('token')) {
        localStorage.setItem('token', newToken);
      } else {
        sessionStorage.setItem('token', newToken);
      }
      setAuthToken(newToken);
    }

    dispatch(loginSuccess(user));
  } catch (error) {
    console.error(error);
    dispatch(logout());
  }
};


