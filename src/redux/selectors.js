// import { createSelector } from '@reduxjs/toolkit';

export const selectTask = state => state.task.tasks;

// export const selectFilter = state => state.filt.filter;

export const selectIsLoading = state => state.task.isLoading;

export const selectError = state => state.task.error;

// export const selectSearchedContacts = createSelector(
//   [selectTask, selectFilter],
//   (storeContacts, searchedContact) => {
//     return storeContacts.filter(contact => {
//       const fitContact = contact.name
//         .toLowerCase()
//         .includes(searchedContact.toLowerCase());
//       return fitContact;
//     });
//   }
// );
