import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    booking: bookingReducer,
  },
});
