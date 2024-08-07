import { CloseButton, ModalContent, ModalOverlay } from './modalWindowsStyled';
import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';


export const Modal = ({ isOpen, onClose, children }) => {
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

  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={closeModalOnBackdrop}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <MdClose style={{ color: 'red' }} />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
