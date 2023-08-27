export const getContacts = state => state.contacts.items; // Повертає список контактів із стану

export const getFilter = state => state.filter; // Повертає поточний фільтр із стану

export const getVisibleContacts = state => {
   const contacts = getContacts(state); // Отримує список контактів
   const filter = getFilter (state); // Отримує поточний фільтр
   const normalizedFilter = filter.toLowerCase(); // Перетворює фільтр на нижній регістр

   // Фільтрує контакти, щоб повертати тільки ті, чиї імена містять підрядок фільтра (у нижньому регістрі)
   return contacts.filter(contact =>
     contact.name.toLowerCase().includes(normalizedFilter)
   );
};