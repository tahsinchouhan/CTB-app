import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  intro: true,
  langPicked: false,
  lang: 'en',
};

export const counterSlice = createSlice({
  name: 'counter',
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
  },
});

export const {setIntro, setLangPicked, setLang} = counterSlice.actions;

export default counterSlice.reducer;
