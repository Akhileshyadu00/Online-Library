import { createSlice, nanoid } from '@reduxjs/toolkit';
import dummyBooks from './bookData';

const booksSlice = createSlice({
  name: 'books',
  initialState: dummyBooks,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(book) {
        return {
          payload: {
            id: nanoid(),
            ...book,
          },
        };
      },
    },
    removeBook(state, action) {
      return state.filter(book => book.id !== action.payload);
    },
    updateBook(state, action) {
      const index = state.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addBook, removeBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
