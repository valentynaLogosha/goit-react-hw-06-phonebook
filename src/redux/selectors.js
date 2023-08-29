import { createSelector } from 'reselect';

// Селектор для отримання списку контактів із стану
export const getContacts = state => state.contacts.items;

// Селектор для отримання поточного фільтра із стану
export const getFilter = state => state.filter;

// Селектор для отримання видимих контактів з урахуванням фільтра
export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);