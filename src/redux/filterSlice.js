import { createSlice } from '@reduxjs/toolkit';

// Початковий стан фільтра
const initialFilterState = '';

// Створення slice фільтра з використанням createSlice
const filterSlice = createSlice({
  name: 'filter', // Ім'я slice фільтра
  initialState: initialFilterState, // Початковий стан фільтра
  reducers: {
    changeFilter(_, action) {
      return action.payload; // Оновлення значення фільтра на основі переданої дії
    },
  },
});

// Експорт дії changeFilter з slice фільтра
export const { changeFilter } = filterSlice.actions;

// Експорт редьюсера фільтра з slice фільтра
export const filterReducer = filterSlice.reducer;