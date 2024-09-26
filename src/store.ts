import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import { combineReducers } from 'redux';
import listsReducer from './slices/listsSlice';
import cardsReducer from './slices/cardsSlice';

// Create the persist config object for redux-persist
const persistConfig = {
  key: 'root',
  storage, // This will store the state in localStorage
  whitelist: ['lists', 'cards'], // Specify which reducers to persist
};

// Combine reducers
const rootReducer = combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
});

// Persist the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Create a persistor object
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
