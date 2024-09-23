// src/components/NewCardForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCard } from '../slices/cardsSlice';

interface NewCardFormProps {
  listId: string;
}

const NewCardForm: React.FC<NewCardFormProps> = ({ listId }) => {
  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardTitle.trim()) {
      // Dispatch createCard with the listId, title, and description
      dispatch(createCard({ listId, title: cardTitle, description: cardDescription }));
      setCardTitle('');
      setCardDescription('');
    }
  };

  return (
    <div className="group/new-card m-3 flex h-44 w-full justify-center rounded-t-md">
      <form onSubmit={handleAddCard} className="min-h-24 w-full flex-col items-start bg-off-white-light rounded-t-md">
        <input
          className="w-full resize-none border-0 bg-off-white-light px-12 py-8 text-xl font-black text-blue rounded-t-md"
          autoFocus
          type="text"
          placeholder="Title"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
        <textarea
          className="w-full resize-none border-0 bg-off-white-light text-blue px-12 py-2"
          placeholder="Description"
          value={cardDescription}
          onChange={(e) => setCardDescription(e.target.value)}
        ></textarea>
        <button type="submit" className="w-full p-4 bg-off-white-light text-blue rounded-b-md">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewCardForm;
