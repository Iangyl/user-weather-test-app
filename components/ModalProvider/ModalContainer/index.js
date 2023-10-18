'use client';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal';
import CustomizedSnackbar from '../Snackbar';

import styles from './index.module.sass';

const ModalContainer = ({
  isOpen,
  isSnackbarOpen,
  onClose,
  onCloseSnackbar,
  content
}) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById('root');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          className={`${styles.container} ${
            isOpen || isSnackbarOpen ? styles.open : styles.close
          }`}
        >
          {isOpen && <Modal content={content} onClose={onClose} />}
          {isSnackbarOpen && <CustomizedSnackbar isOpen={isSnackbarOpen} onClose={onCloseSnackbar} />}
        </div>,
        document.body
      )
    : null;
};

export default ModalContainer;
