import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Card interface
interface Card {
  id: string;
  title: string;
  description: string;
  listId: string; // Add listId here
}

// State interface
interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // Action to create a new card
    createCard: (state, action: PayloadAction<{ listId: string; title: string; description: string }>) => {
      const newCard = {
        id: uuidv4(), // Generate unique ID
        title: action.payload.title,
        description: action.payload.description,
        listId: action.payload.listId, // Store the listId in the card
      };
      state.cards.push(newCard);
    },

    // Action to delete a card by ID
    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },

    // Action to clear all cards
    clearCards: (state) => {
      state.cards = [];
    },
  },
});

export const { createCard, deleteCard, clearCards } = cardsSlice.actions;
export default cardsSlice.reducer;
