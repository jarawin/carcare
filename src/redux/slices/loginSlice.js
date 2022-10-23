import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  is_login: JSON.parse(localStorage.getItem('is_login') == 'true' || 'false'),
  isCustomer: JSON.parse(
    localStorage.getItem('isCustomer') == 'true' || 'false'
  ),
  first_name: localStorage.getItem('first_name') || '',
  last_name: localStorage.getItem('last_name') || '',
  image_url: localStorage.getItem('image_url') || '',
  social_id: localStorage.getItem('social_id') || '',
  email: localStorage.getItem('email') || '',
  tel: localStorage.getItem('tel') || '',
  firstlogin_time: localStorage.getItem('firstlogin_time') || '',
  lastlogin_time: localStorage.getItem('lastlogin_time') || '',
  rank: localStorage.getItem('rank') || '',
  customer_type: localStorage.getItem('customer_type') || '',
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
      localStorage.setItem('email', '');

      state.is_login = false;
      state.first_name = '';
      state.last_name = '';
      state.image_url = '';
      state.social_id = '';
      state.state = 'idle';
    },

    setIsCustomer: (state, action) => {
      localStorage.setItem('isCustomer', action.payload);
      state.isCustomer = action.payload;
    },

    setProfile: (state, action) => {
      localStorage.setItem('first_name', action.payload.first_name);
      localStorage.setItem('last_name', action.payload.last_name);
      localStorage.setItem('image_url', action.payload.image_url);
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('tel', action.payload);

      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.image_url = action.payload.image_url;
      state.email = action.payload.email;
      state.tel = action.payload.tel;
    },

    handleLogin: (state, action) => {
      localStorage.setItem('is_login', true);
      localStorage.setItem('first_name', action.payload.given_name);
      localStorage.setItem('last_name', action.payload.family_name);
      localStorage.setItem('image_url', action.payload.picture);
      localStorage.setItem('social_id', action.payload.sub);
      localStorage.setItem('email', action.payload.email);

      state.first_name = action.payload.given_name;
      state.last_name = action.payload.family_name;
      state.image_url = action.payload.picture;
      state.social_id = action.payload.id;
      state.email = action.payload.email;
      state.is_login = true;
      state.state = 'idle';
    },

    updateProfile: (state, action) => {
      localStorage.setItem('first_name', action.payload.first_name);
      localStorage.setItem('last_name', action.payload.last_name);
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('tel', action.payload.tel);

      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.tel = action.payload.tel;
    },

    setFullData: (state, action) => {
      localStorage.setItem('first_name', action.payload.fname);
      localStorage.setItem('last_name', action.payload.lname);
      localStorage.setItem('image_url', action.payload.picture_url);
      localStorage.setItem('social_id', action.payload.customer_id);
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('tel', action.payload.tel);
      localStorage.setItem('firstlogin_time', action.payload.firstlogin_time);
      localStorage.setItem('lastlogin_time', action.payload.lastlogin_time);
      localStorage.setItem('rank', action.payload.rank);
      localStorage.setItem('customer_type', action.payload.customer_type);

      state.first_name = action.payload.fname;
      state.last_name = action.payload.lname;
      state.image_url = action.payload.picture_url;
      state.social_id = action.payload.customer_id;
      state.email = action.payload.email;
      state.tel = action.payload.tel;
      state.firstlogin_time = action.payload.firstlogin_time;
      state.lastlogin_time = action.payload.lastlogin_time;
      state.rank = action.payload.rank;
      state.customer_type = action.payload.customer_type;
    },
  },
});

export const {
  login,
  logout,
  handleLogin,
  setProfile,
  setIsCustomer,
  updateProfile,
  setFullData,
} = loginSlice.actions;

export const getStateLogin = (state) => state.login.is_login;
export const getIsLogin = (state) => state.login.is_login;
export const getSelectBy = (state) => state.login.select_by;
export const getIsCustomer = (state) => state.login.isCustomer;
export const getCustomerId = (state) => state.login.social_id;
export const getForBooking = (state) => {
  return {
    first_name: state.login.first_name,
    tel: state.login.tel,
  };
};
export const getDataUser = (state) => {
  return {
    first_name: state.login.first_name,
    last_name: state.login.last_name,
    image_url: state.login.image_url,
    social_id: state.login.social_id,
    email: state.login.email,
    tel: state.login.tel,
    firstlogin_time: state.login.firstlogin_time,
    lastlogin_time: state.login.lastlogin_time,
    rank: state.login.rank,
    customer_type: state.login.customer_type,
  };
};

export const getCustomerInfo = (state) => {
  return {
    customer_id: state.login.social_id,
    fname: state.login.first_name,
    lname: state.login.last_name,
    email: state.login.email,
    picture_url: state.login.image_url,
    tel: state.login.tel,
  };
};
export default loginSlice.reducer;
