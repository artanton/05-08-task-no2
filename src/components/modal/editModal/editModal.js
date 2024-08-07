import { useDispatch } from 'react-redux';
import { updateTask } from '../../../redux/operators';
import { ModalButton, TextInput } from './editModalStyled';
import { useState } from 'react';


export const EditTaskModal = ({ taskId, initialText, onClose }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(initialText);

  const handleUpdate = () => {
    dispatch(updateTask({ taskId, text }));
    onClose();
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>Edit task please</p>

      <form>
        <TextInput
          name="text"
          type="textarea"
          rows="3"
          value={text}
          onChange={handleChange}
          placeholder="Insert edited task here"
        />
      </form>
      <ModalButton type="button" onClick={handleUpdate}>
        Edit
      </ModalButton>
    </div>
  );
};
