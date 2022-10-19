import { createSlice } from '@reduxjs/toolkit';
import statusList from '../../data/statusList';

const initialState = {
  orders: JSON.parse(localStorage.getItem('orders') || '[]'),
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,

  reducers: {
    addOrder: (state, action) => {
      var temp = [];
      action.payload.forEach((element) => {
        const settings = {
          ...element,
          showCommission: false,
          showSetting: false,
          showBooking: false,
          showArrived: false,
          showCode: false,
        };
        temp.push(settings);
      });

      localStorage.setItem('orders', JSON.stringify(temp));
      state.orders = temp;
    },
    nextStatus: (state, action) => {
      const idxOrder = action.payload.oIdx;
      const idxOrderList = statusList.findIndex(
        (status) => status.name === action.payload.status
      );
      if (idxOrderList < statusList.length - 1 && idxOrderList > 0) {
        if (idxOrderList == 1) {
          state.orders[idxOrder].order_status =
            statusList[idxOrderList + 2].name;
        } else {
          state.orders[idxOrder].order_status =
            statusList[idxOrderList + 1].name;
        }
      }
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    prevStatus: (state, action) => {
      const idxOrder = action.payload.oIdx;
      const idxOrderList = statusList.findIndex(
        (status) => status.name === action.payload.status
      );

      if (idxOrderList > 3) {
        state.orders[idxOrder].order_status = statusList[idxOrderList - 1].name;
      }
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    resetStatus: (state, action) => {
      const idxOrder = action.payload.oIdx;

      if (state.orders[idxOrder].is_booking) {
        state.orders[idxOrder].order_status = 'BOOKING';
      } else {
        state.orders[idxOrder].order_status = 'ARRIVED';
      }
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    cancelStatus: (state, action) => {
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].order_status = 'CANCELLED';
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    setShowSetting: (state, action) => {
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].showSetting = action.payload.isShow;
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    setShowCommission: (state, action) => {
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].showCommission = action.payload.isShow;
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    setShowBooking: (state, action) => {
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].showBooking = action.payload.isShow;
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    setShowArrived: (state, action) => {
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].showArrived = action.payload.isShow;
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    setShowCode: (state, action) => {
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].showCode = action.payload.isShow;
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    setServiceDone: (state, action) => {
      const idxOrder = action.payload.oIdx;
      const idxService = action.payload.sIdx;
      state.orders[idxOrder].services[idxService].is_done =
        action.payload.isDone;
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
  },
});

export const {
  addOrder,
  nextStatus,
  prevStatus,
  resetStatus,
  cancelStatus,
  setShowCommission,
  setShowSetting,
  setShowBooking,
  setShowArrived,
  setShowCode,
  setServiceDone,
} = orderSlice.actions;

export const selectOrder = (state) => state.orders.orders;
export default orderSlice.reducer;
