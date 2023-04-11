import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from "./contacts/filterSlice";
import { contactsReducer } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
      filter: filterReducer,
  },
});


