import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Вихідні контакти телефону
const phoneContacts = {
  items: [
    { id: 'id-1', name: 'Steve Jobs', number: '459-12-56' },
    { id: 'id-2', name: 'Bill Gates', number: '443-89-12' },
    { id: 'id-3', name: 'Elon Musk', number: '645-17-79' },
    { id: 'id-4', name: 'Mark Zuckerberg', number: '227-91-26' },
  ],
};

// Створення slice контактів з використання createSlice
const contactsSlice = createSlice({
  name: 'contacts', // Ім'я slice контактів
  initialState: phoneContacts, // Початковий стан контактів
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload); // Додавання нового контакту до списку контактів
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact }, // Підготовка даних для додавання контакту з унікальним ідентифікатором
      };
    },
    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index, 1); // Видалення контактів із списку контактів
    },
  },
});

// Експорт дій addContact і removeContact з slice контактів
export const { addContact, removeContact } = contactsSlice.actions;

//Створення персистентного редьюсера для збереження контактів з використанням redux-persist
export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);