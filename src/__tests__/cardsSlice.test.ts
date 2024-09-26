import { describe, it, expect } from 'vitest';
import cardsReducer, { createCard, deleteCard, clearCards } from '../slices/cardsSlice';

describe('cardsSlice reducer', () => {
  const initialState = {
    cards: [],
  };

  it('should handle createCard', () => {
    const state = cardsReducer(
      initialState,
      createCard({ listId: '1', title: 'Test Card', description: 'Test Description' })
    );
    expect(state.cards.length).toBe(1);
    expect(state.cards[0].title).toBe('Test Card');
    expect(state.cards[0].listId).toBe('1');
  });

  it('should handle deleteCard', () => {
    const stateWithCard = {
      cards: [{ id: '101', title: 'Test Card', description: 'Test', listId: '1' }],
    };
    const state = cardsReducer(stateWithCard, deleteCard('101'));
    expect(state.cards.length).toBe(0);
  });

  it('should handle clearCards', () => {
    const stateWithCards = {
      cards: [{ id: '101', title: 'Test Card', description: 'Test', listId: '1' }],
    };
    const state = cardsReducer(stateWithCards, clearCards());
    expect(state.cards.length).toBe(0);
  });
});
