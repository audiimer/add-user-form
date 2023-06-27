import React from 'react';
import styles from './styles.module.css';

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) {
    return null; // Render nothing if the modal is closed
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <button onClick={onClose}>X</button>
          <h2>Invalid Input</h2>
        </div>

        <div className={styles.modalBody}>
          <p>{message}</p>
        </div>
        <div className={styles.modalFooter}>
        </div>
      </div>
    </div>
  );
};

export default Modal;
