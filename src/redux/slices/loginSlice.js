import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLogin } from '../../api/loginAPI';

const initialState = {
  isLogin: false,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'login/fetchLogin',
  async (amount) => {
    const response = await fetchLogin(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.isLogin = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(incrementAsync.pending, (state) => {
  //         state.status = 'loading';
  //       })
  //       .addCase(incrementAsync.fulfilled, (state, action) => {
  //         state.status = 'idle';
  //         state.value += action.payload;
  //       });
  //   },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
