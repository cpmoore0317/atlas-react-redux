import React, { useState } from 'react';
import Card from './Card';
import DeleteListButton from './DeleteListButton';

interface ListProps {
  title: string;
  cards: { title: string; description: string }[];
}

const List: React.FC<ListProps> = ({ title, cards }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="list"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2>{title}</h2>
      {hovered && <DeleteListButton />}
      <div className="cards">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default List;
