import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCardToList } from '../slices/listsSlice';
import { v4 as uuidv4 } from 'uuid';

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
      const cardId = uuidv4(); // Generate a unique ID for the card
      dispatch(addCardToList({ listId, cardId }));
      setCardTitle('');
      setCardDescription('');
    }
  };

  return (
    <div className="group/new-card m-3 flex h-44 w-full justify-center">
      <form onSubmit={handleAddCard} className="min-h-24 w-full flex-col items-start">
        <input
          className="w-full resize-none rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue"
          autoFocus
          type="text"
          placeholder="Title"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
        <textarea
          className="w-full resize-none border-0 bg-off-white-light text-blue"
          placeholder="Description"
          value={cardDescription}
          onChange={(e) => setCardDescription(e.target.value)}
        ></textarea>
        <button type="submit" className="w-full p-4 bg-teal text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewCardForm;
