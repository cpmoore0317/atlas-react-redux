import React, { useState } from 'react';

const NewCardForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle card submission logic here
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Card Title" 
      />
      <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Card Description"
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default NewCardForm;
