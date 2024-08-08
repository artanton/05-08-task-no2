import { useDispatch } from 'react-redux';

import { deleteTask } from '../../../redux/operators';

import { ModalButton } from './modalStyledWindow';


export const DeleteConfirmationModal = ({ taskId, onClose }) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    dispatch(deleteTask(taskId));
    onClose();
  };

  return (
    <div>
      <p>Are you sure you want to delete this task?</p>
      <div>
        <ModalButton onClick={handleDelete}>Yes</ModalButton>
        <ModalButton onClick={onClose}>No</ModalButton>
      </div>
    </div>
  );
};
