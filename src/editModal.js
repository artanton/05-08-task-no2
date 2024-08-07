import { useDispatch } from 'react-redux';
import { updateTask } from '../../../redux/operators';
import {
  ModalButton,
  ModalContent,
  ModalOverlay,
  TextInput,
} from './editModalStyled';
import { useEffect, useState } from 'react';

export const EditTaskModal = ({ taskId, initialText, onClose }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(initialText);

  const handleUpdate = () => {
   
    dispatch(updateTask({ taskId, text }));
    onClose();
  };

  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const closeModalOnEsc = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeModalOnEsc);

    return () => {
      window.removeEventListener('keydown', closeModalOnEsc);
    };
  }, [onClose]);

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <ModalOverlay onClick={closeModalOnBackdrop}>
      <ModalContent>
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
        <div></div>
      </ModalContent>
    </ModalOverlay>
  );
};
