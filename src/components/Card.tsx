import React, { useState } from 'react';
import DeleteCardButton from './DeleteCardButton';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {hovered && <DeleteCardButton />}
    </div>
  );
};

export default Card;
