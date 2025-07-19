import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastContex';

function ToastShelf() {
  const {toasts} = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper} 
    role="region"
    aria-live="polite"
    aria-label="Notification">
      {toasts.map(({key, variant, message})=>(
        <li className={styles.toastWrapper} key={key}>
          <Toast id={key} variant={variant} >{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
