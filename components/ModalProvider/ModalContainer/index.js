'use client';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal';

import styles from './index.module.sass';

const ModalContainer = ({
  isOpen,
  onClose,
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
            isOpen ? styles.open : styles.close
          }`}
        >
          {isOpen && <Modal content={content} onClose={onClose} />}
        </div>,
        document.body
      )
    : null;
};

export default ModalContainer;
