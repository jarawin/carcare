import { createSlice } from '@reduxjs/toolkit';

import timeAvailable from '../../data/mock/timeAvailable';
import carColors from '../../data/carColors';
import carTypes from '../../data/carTypes';
import services from '../../data/mock/services';

function getTimeStamp(t) {
  var parts = t.trim().split(' ');
  var date = parts[0].split('/');
  var time = (parts[1] ? parts[1] + ':00' : '00:00:00').split(':');
  console.log(date, time, t);

  var d = new Date(date[2], date[1] - 1, date[0], time[0], time[1], time[2]);
  return d.getTime() / 1000;
}

const dateAvailable = new Date().toLocaleDateString('th-TH');

const initialState = {
  type_car: localStorage.getItem('booking.type_car') || carTypes[0].type_of_car,
  license_car: localStorage.getItem('booking.license_car') || '',
  color_car: localStorage.getItem('booking.color_car') || carColors[0].color,
  nickname: localStorage.getItem('booking.nickname') || '',
  tel: localStorage.getItem('booking.tel') || '',
  is_booking: localStorage.getItem('booking.is_booking') == 'true' ?? false,
  code: localStorage.getItem('booking.code') || '',
  comment: localStorage.getItem('booking.comment') || '',
  booking_time:
    localStorage.getItem('booking.booking_time') ||
    getTimeStamp(dateAvailable + ' ' + timeAvailable[0]),
  included: JSON.parse(localStorage.getItem('booking.included')) || [
    { service_id: services[0].service_id },
  ],
  promotion: localStorage.getItem('booking.promotion') || '',
  date: localStorage.getItem('booking.date') ?? dateAvailable,
  time: localStorage.getItem('booking.time') || timeAvailable[0],
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,

  reducers: {
    setDate: (state, action) => {
      localStorage.setItem('booking.date', action.payload);
      state.date = action.payload;
    },
    setTime: (state, action) => {
      localStorage.setItem('booking.time', action.payload);
      state.time = action.payload;
    },
    setPromotion: (state, action) => {
      localStorage.setItem('booking.promotion', action.payload);
      state.promotion = action.payload;
    },
    setTypeCar: (state, action) => {
      localStorage.setItem('booking.type_car', action.payload);
      state.type_car = action.payload;
    },
    setLicenseCar: (state, action) => {
      localStorage.setItem('booking.license_car', action.payload);
      state.license_car = action.payload;
    },
    setColorCar: (state, action) => {
      localStorage.setItem('booking.color_car', action.payload);
      state.color_car = action.payload;
    },
    setNickname: (state, action) => {
      localStorage.setItem('booking.nickname', action.payload);
      state.nickname = action.payload;
    },
    setTel: (state, action) => {
      localStorage.setItem('booking.tel', action.payload);
      state.tel = action.payload;
    },
    setIsBooking: (state, action) => {
      localStorage.setItem('booking.is_booking', action.payload);
      state.is_booking = action.payload;
    },
    setCode: (state, action) => {
      localStorage.setItem('booking.code', action.payload);
      state.code = action?.payload?.toUpperCase();
    },
    setComment: (state, action) => {
      localStorage.setItem('booking.comment', action.payload);
      state.comment = action.payload;
    },
    setBookingTime: (state, action) => {
      localStorage.setItem('booking.booking_time', action.payload);
      state.booking_time = action.payload;
    },
    setIncluded: (state, action) => {
      localStorage.setItem('booking.included', JSON.stringify(action.payload));
      state.included = action.payload;
    },
  },
});

export const {
  setTypeCar,
  setLicenseCar,
  setColorCar,
  setNickname,
  setTel,
  setIsBooking,
  setCode,
  setComment,
  setBookingTime,
  setIncluded,
  setPromotion,
  setDate,
  setTime,
} = bookingSlice.actions;

export const selectDataBooking = (state) => {
  return state.booking;
};

export default bookingSlice.reducer;
