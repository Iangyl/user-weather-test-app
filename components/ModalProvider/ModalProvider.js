'use client';
import { useState, useCallback, createContext, useContext } from 'react';
import ModalContainer from './ModalContainer';

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState();

  const openModal = useCallback((content) => {
    setIsOpen(true);
    setContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <ModalContainer content={content} isOpen={isOpen} onClose={closeModal} />
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
