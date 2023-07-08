import { configureStore } from '@reduxjs/toolkit';

import { contactsReduser } from './ContactForm/contactSlice';
import { filterReduser } from './Filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
