import React from 'react';
import List from './List';

const Board = () => {
  const lists = [
    {
      title: 'To Do',
      cards: [
        { title: 'Task 1', description: 'Description 1' },
        { title: 'Task 2', description: 'Description 2' },
      ],
    },
    {
      title: 'In Progress',
      cards: [
        { title: 'Task 3', description: 'Description 3' },
        { title: 'Task 4', description: 'Description 4' },
      ],
    },
  ];

  return (
    <div className="board">
      {lists.map((list, index) => (
        <List key={index} title={list.title} cards={list.cards} />
      ))}
    </div>
  );
};

export default Board;
