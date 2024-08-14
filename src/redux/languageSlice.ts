import { createSlice } from '@reduxjs/toolkit';

export type LanguageState = string;

const initialState: LanguageState = 'en';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => (state === 'en' ? 'vi' : 'en'),
    setLanguage: (_, action) => action.payload as LanguageState,
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
