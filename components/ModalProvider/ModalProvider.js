'use client';
import { useState, useCallback, createContext, useContext } from 'react';
import ModalContainer from './ModalContainer';

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [content, setContent] = useState();

  const openModal = useCallback((content) => {
    setIsOpen(true);
    setContent(content);
  }, []);

  const openSnackbar = useCallback(() => {
    setIsSnackbarOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const closeSnackbar = useCallback(() => {
    setIsSnackbarOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, openSnackbar, closeSnackbar }}>
      <ModalContainer
        content={content}
        isOpen={isOpen}
        isSnackbarOpen={isSnackbarOpen}
        onClose={closeModal}
        onCloseSnackbar={closeSnackbar}
      />
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
