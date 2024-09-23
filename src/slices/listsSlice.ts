import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface List {
  id: string;
  title: string;
  cardIds: string[];
}

interface ListsState {
  lists: List[];
}

const initialState: ListsState = {
  lists: [],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    // Add a new list
    addList: (state, action: PayloadAction<string>) => {
      const newList: List = {
        id: uuidv4(), // Generates a unique ID for each list
        title: action.payload, // Title is passed as payload
        cardIds: [],
      };
      state.lists.push(newList);
    },

    // Delete a list by ID
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },

    // Add a card to a specific list by list ID
    addCardToList: (
      state,
      action: PayloadAction<{ listId: string; cardId: string }>
    ) => {
      const { listId, cardId } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        list.cardIds.push(cardId);
      }
    },

    // Clear the entire board (reset to initial state)
    clearBoard: (state) => {
      state.lists = [];
    },
  },
});

export const { addList, deleteList, addCardToList, clearBoard } =
  listsSlice.actions;

export default listsSlice.reducer;
