import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteTask } from '../../../redux/operators';
import { groupTasksByParentId } from '../../../helper/helper';
import { ModalButton } from './modalStyledWindow';
import { selectTask } from '../../../redux/selectors';

export const DeleteConfirmationModal = ({ taskId, onClose }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTask);
  const taskMap = groupTasksByParentId(tasks);

  const deleteTaskChain = taskId => {
    if (taskMap[taskId]) {
      taskMap[taskId].forEach(subtask => deleteTaskChain(subtask.id));
    }

    dispatch(deleteTask(taskId));
  };

  const handleDelete = () => {
    deleteTaskChain(taskId);
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
