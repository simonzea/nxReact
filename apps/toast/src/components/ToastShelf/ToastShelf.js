import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, handleClose}) {
  
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({key, variant, message})=>(
        <li className={styles.toastWrapper} key={key}>
          <Toast id={key} variant={variant} onClose={handleClose} >{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
