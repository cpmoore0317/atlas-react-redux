import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './slices/listsSlice';
import cardsReducer from './slices/cardsSlice'; // Import cardsReducer

export const store = configureStore({
  reducer: {
    lists: listsReducer,
    cards: cardsReducer, // Add cardsReducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
