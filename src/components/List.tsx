import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteList } from '../slices/listsSlice';
import DeleteListButton from './DeleteListButton';
import Card from './Card';
import NewCardForm from './NewCardForm';

interface ListProps {
  title: string;
  listId: string;
}

const List: React.FC<ListProps> = ({ title, listId }) => {
  const dispatch = useDispatch();

  const handleDeleteList = () => {
    dispatch(deleteList(listId));
  };

  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton onClick={handleDeleteList} />
      <h3>{title}</h3>
      {/* Add Card components here */}
      <NewCardForm listId={listId} />
    </div>
  );
};

export default List;
