import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './slices/listsSlice'; // Import the lists slice
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Configure the store and add the `listsReducer` to the store's reducer
export const store = configureStore({
  reducer: {
    lists: listsReducer,  // Add the lists reducer to the store
  },
});

// Define types for the state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for use in components
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
