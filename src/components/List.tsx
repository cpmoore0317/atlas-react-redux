// src/components/List.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList } from '../slices/listsSlice';
import DeleteListButton from './DeleteListButton';
import Card from './Card';
import NewCardForm from './NewCardForm';
import { RootState } from '../store';

interface ListProps {
  title: string;
  listId: string;
}

const List: React.FC<ListProps> = ({ title, listId }) => {
  const dispatch = useDispatch();

  // Select all cards from the store
  const cards = useSelector((state: RootState) => state.cards.cards);

  // Filter the cards for the current list
  const listCards = cards.filter((card) => card.listId === listId);

  const handleDeleteList = () => {
    dispatch(deleteList(listId));
  };

  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton onClick={handleDeleteList} />
      <h3>{title}</h3>

      {/* Render the cards for the current list */}
      {listCards.map((card) => (
        <Card key={card.id} id={card.id} title={card.title} description={card.description} />
      ))}

      {/* Render the NewCardForm to add new cards */}
      <NewCardForm listId={listId} />
    </div>
  );
};

export default List;
