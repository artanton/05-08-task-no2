// import { useDispatch } from 'react-redux';
// import { updateTask } from '../../../redux/operators';
// import { ModalButton, TextInput } from './editModalStyled';
import { TaskForm } from 'components/taskForm/taskForm';

export const AddSubTaskModal = ({ taskId, onClose, subLevel, }) => {
 

  return (
    <div>
      <h2
        style={{
          padding: 10,
        }}
      >
        Add SubTask
      </h2>

      <TaskForm parentId ={ taskId} onClose={onClose} subLevel={subLevel} />
    </div>
  );
};
