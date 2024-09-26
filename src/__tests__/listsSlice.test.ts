import { describe, it, expect } from 'vitest';
import listsReducer, { addList, deleteList, addCardToList, clearBoard } from '../slices/listsSlice';

describe('listsSlice reducer', () => {
  const initialState = {
    lists: [],
  };

  it('should handle addList', () => {
    const state = listsReducer(initialState, addList('New List'));
    expect(state.lists.length).toBe(1);
    expect(state.lists[0].title).toBe('New List');
  });

  it('should handle deleteList', () => {
    const stateWithList = { lists: [{ id: '1', title: 'Test List', cardIds: [] }] };
    const state = listsReducer(stateWithList, deleteList('1'));
    expect(state.lists.length).toBe(0);
  });

  it('should handle addCardToList', () => {
    const stateWithList = { lists: [{ id: '1', title: 'Test List', cardIds: [] }] };
    const state = listsReducer(stateWithList, addCardToList({ listId: '1', cardId: '101' }));
    expect(state.lists[0].cardIds).toContain('101');
  });

  it('should handle clearBoard', () => {
    const stateWithLists = {
      lists: [{ id: '1', title: 'Test List', cardIds: [] }],
    };
    const state = listsReducer(stateWithLists, clearBoard());
    expect(state.lists.length).toBe(0);
  });
});
