import { createSlice } from '@reduxjs/toolkit';

export type LanguageState = any;

const initialState: LanguageState = 'en';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => (state === 'en' ? 'vi' : 'en'), 
    setLanguage: (state, action) => action.payload as LanguageState, 
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
