import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Board />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
