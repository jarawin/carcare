import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  is_login: JSON.parse(localStorage.getItem('is_login')) || false,
  first_name: localStorage.getItem('first_name') || '',
  last_name: localStorage.getItem('last_name') || '',
  image_url: localStorage.getItem('image_url') || '',
  social_id: localStorage.getItem('social_id') || '',
  login_state: localStorage.getItem('login_state') || '',
  email: localStorage.getItem('email') || '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,

  reducers: {
    login: (state) => {
      window.google.accounts.id.prompt();
      state.state = 'waiting';
    },

    logout: (state) => {
      localStorage.setItem('is_login', false);
      localStorage.setItem('first_name', '');
      localStorage.setItem('last_name', '');
      localStorage.setItem('image_url', '');
      localStorage.setItem('social_id', '');
      localStorage.setItem('login_state', '');
      localStorage.setItem('email', '');

      state.is_login = false;
      state.first_name = '';
      state.last_name = '';
      state.image_url = '';
      state.social_id = '';
      state.state = 'idle';
    },

    setProfile: (state, action) => {
      localStorage.setItem('first_name', action.payload.first_name);
      localStorage.setItem('last_name', action.payload.last_name);
      localStorage.setItem('image_url', action.payload.image_url);
      localStorage.setItem('email', action.payload.email);

      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.image_url = action.payload.image_url;
      state.email = action.payload.email;
    },

    handleLogin: (state, action) => {
      localStorage.setItem('is_login', true);
      localStorage.setItem('first_name', action.payload.given_name);
      localStorage.setItem('last_name', action.payload.family_name);
      localStorage.setItem('image_url', action.payload.picture);
      localStorage.setItem('social_id', action.payload.sub);
      localStorage.setItem('login_state', action.payload.state);
      localStorage.setItem('email', action.payload.email);

      state.first_name = action.payload.given_name;
      state.last_name = action.payload.family_name;
      state.image_url = action.payload.picture;
      state.social_id = action.payload.id;
      state.email = action.payload.email;
      state.is_login = true;
      state.state = 'idle';
    },
  },
});

export const { login, logout, handleLogin, setProfile } = loginSlice.actions;

export const getStateLogin = (state) => state.login.is_login;
export const getIsLogin = (state) => state.login.is_login;
export const getSelectBy = (state) => state.login.select_by;
export const getDataUser = (state) => {
  return {
    first_name: state.login.first_name,
    last_name: state.login.last_name,
    image_url: state.login.image_url,
    social_id: state.login.social_id,
    email: state.login.email,
  };
};

export default loginSlice.reducer;
