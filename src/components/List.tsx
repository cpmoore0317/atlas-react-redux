import React from 'react';
import DeleteListButton from './DeleteListButton';
import Card from './Card';
import NewCardForm from './NewCardForm';

interface CardData {
  title: string;
  description: string;
}

interface ListProps {
  title: string;
  cards: CardData[];
}

const List: React.FC<ListProps> = ({ title, cards }) => {
  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton />
      <h3>{title}</h3>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
      <NewCardForm />
    </div>
  );
};

export default List;
