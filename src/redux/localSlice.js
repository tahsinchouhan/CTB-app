import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  intro: true,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIntro: (state, action) => {
      state.intro = action.payload;
    },
  },
});

export const {setIntro} = counterSlice.actions;

export default counterSlice.reducer;
