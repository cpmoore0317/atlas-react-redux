import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <Header />
          <Board />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
