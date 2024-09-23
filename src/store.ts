import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './slices/listsSlice';

export const store = configureStore({
  reducer: {
    lists: listsReducer, // Add the lists reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
