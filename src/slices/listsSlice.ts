import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';  // Using UUID for unique IDs

// Define the shape of a card
interface Card {
  id: string;
  title: string;
  description: string;
}

// Define the shape of a list
interface List {
  id: string;
  title: string;
  cardIds: string[];
}

// Define the shape of the state managed by the lists slice
interface ListsState {
  lists: List[];
  cards: { [key: string]: Card };  // Dictionary to store cards
}

// Initial state with empty lists and cards
const initialState: ListsState = {
  lists: [],
  cards: {},
};

// Create the slice
const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    // Action to add a new list
    addList: (state, action: PayloadAction<string>) => {
      const newList: List = {
        id: uuidv4(),
        title: action.payload,
        cardIds: [],
      };
      state.lists.push(newList);
    },

    // Action to delete a list by ID
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },

    // Action to add a card to a specific list
    addCardToList: (
      state,
      action: PayloadAction<{ listId: string; title: string; description: string }>
    ) => {
      const { listId, title, description } = action.payload;
      const newCardId = uuidv4();
      const newCard: Card = { id: newCardId, title, description };

      state.cards[newCardId] = newCard;
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        list.cardIds.push(newCardId);
      }
    },

    // Action to clear/reset the board (removes all lists and cards)
    clearBoard: state => {
      state.lists = [];
      state.cards = {};
    },
  },
});

// Export the actions
export const { addList, deleteList, addCardToList, clearBoard } = listsSlice.actions;

// Export the reducer to be added to the store
export default listsSlice.reducer;
