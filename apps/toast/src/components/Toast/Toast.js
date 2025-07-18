import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import {ToastContext} from '../ToastContex';
import styles from './Toast.module.css';


const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({variant, id, children}) {
  const Icon = ICONS_BY_VARIANT[variant];
  const {handleClose} = React.useContext(ToastContext);
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {variant === 'error' &&  <div class="VisuallyHidden_wrapper">
+         error -
+       </div>}
        {children}
      </p>
      <form onSubmit={(event)=>{
        event.preventDefault();
        handleClose(id);
      }}>
        <button className={styles.closeButton}
         type="submit" 
          aria-label="Dismiss message"
          aria-live="off">
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </form>
      
    </div>
  );
}

export default Toast;
