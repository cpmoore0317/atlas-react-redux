// src/components/Board.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import List from './List';
import Card from './Card';

const Board: React.FC = () => {
  const lists = useSelector((state: RootState) => state.lists.lists);
  const cards = useSelector((state: RootState) => state.cards.cards);

  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        {lists.map((list) => (
          <div key={list.id}>
            <List title={list.title} listId={list.id} />
            <div className="cards-container">
              {cards
                .filter((card) => card.listId === list.id) // Filter cards by list ID
                .map((card) => (
                  <Card key={card.id} id={card.id} title={card.title} description={card.description} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
