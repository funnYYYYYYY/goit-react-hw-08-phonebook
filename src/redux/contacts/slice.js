import { createSlice } from '@reduxjs/toolkit';
import { addContacts } from './operation';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  items: [],
  isLoading: false,
  token: null,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(addContacts.pending, (state, action) => state)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      }),
});

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,

//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchContacts.rejected]: handleRejected,

//     [addContacts.pending]: handlePending,
//     [addContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addContacts]: handleRejected,

//     [deleteContacts.pending]: handlePending,
//     [deleteContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteContacts.error]: handleRejected,
//   },
// });

export const contactsReducer = contactsSlice.reducer;
