import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import bookingReducer from './slices/bookingSlice';
import orderSlice from './slices/orderSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    booking: bookingReducer,
    orders: orderSlice,
  },
});
