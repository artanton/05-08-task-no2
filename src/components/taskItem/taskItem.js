import React, { useState } from 'react';

import { VscTrash } from 'react-icons/vsc';
import { formatToString} from 'helper/helper';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { DeleteConfirmationModal } from 'components/modal/deleteModal/deleteModalWindow';
import { EditTaskModal } from 'components/modal/editModal/editModal';
import { AddSubTaskModal } from 'components/modal/addSubTaskModal/addSubtaskModal';

import { Modal } from 'components/modal/modalWindow';
import { AddSubTaskButton, DeleteButton, EditButton, TaskRow } from './taskItemStyled';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const TaskItem = ({ task, color }) => {
  const { _id, text, date, parentId, subLevel } = task;
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const formattedDate = formatToString(date);
    
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const openSubTaskModal = () => {
    setModalContent(
      <AddSubTaskModal  taskId={_id} parentId = {parentId} subLevel={subLevel} onClose={closeModal} />
    );
    openModal();
  };

  const openEditModal = () => {
    setModalContent(
      <EditTaskModal taskId={_id} initialText={text} onClose={closeModal} />
    );
    openModal();
  };

  const openDeleteModal = () => {
    setModalContent(
      <DeleteConfirmationModal taskId={_id} onClose={closeModal} />
    );
    openModal();
  };



  function CSSGrid() {
    return (
      <TaskRow >
        <Box sx={{ width: 1 }} >
          <Box display="grid" gridTemplateColumns="repeat(13, 1fr)" gap={1} >
           

            <Box gridColumn="span 6">
              <Item style={{ backgroundColor: `${color}`}}>{text}</Item>
            </Box>
            <Box gridColumn="span 3">
              <Item>{formattedDate}</Item>
            </Box>
            <Box gridColumn="span 2">
            <Item>
                <AddSubTaskButton
                 onClick={openSubTaskModal}>
                  Add subtask
                  </AddSubTaskButton>
              </Item>
            </Box>
            <Box gridColumn="span 1">
              <Item>
                <EditButton onClick={openEditModal}>Edit</EditButton>
              </Item>
            </Box>
            <Box gridColumn="span 1">
              <Item>
                <DeleteButton onClick={openDeleteModal}>
                  <VscTrash style={{ height: '14px' }} />
                </DeleteButton>
              </Item>
            </Box>
          </Box>
        </Box>
        <Modal isOpen={showModal} onClose={closeModal}>
          {modalContent}
        </Modal>
      </TaskRow>
    );
  }

  return <CSSGrid />;
};
