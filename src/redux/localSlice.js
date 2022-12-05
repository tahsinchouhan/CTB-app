/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  intro: true,
  langPicked: false,
  lang: 'en',
  token: null,
  userId: null,
};

export const counterSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    setIntro: (state, action) => {
      state.intro = action.payload;
    },
    setLangPicked: (state, action) => {
      state.langPicked = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
      state.langPicked = true;
    },
    setTokenAndId: (state, action) => {
      state.token = action?.payload?.token;
      state.userId = action?.payload?.userId;
    },
  },
});

export const { setIntro, setLangPicked, setLang, setTokenAndId } =
  counterSlice.actions;

export default counterSlice.reducer;
