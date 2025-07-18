import React from 'react';

import Button from '../Button';
import ToastShelf  from '../ToastShelf';
import {ToastContext} from '../ToastContex';
import useEscapeKey from '../../hooks/useEscapeKey';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];



function ToastPlayground() {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');
  const {toasts, handleAddToast, resetAllToasts} = React.useContext(ToastContext);

  useEscapeKey(resetAllToasts);

  const handlePopToast = (event)=>{
      event.preventDefault();
      handleAddToast({variant, message});
      setMessage('');
      setVariant(VARIANT_OPTIONS[0]);
      };

  

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} />
      <form onSubmit={handlePopToast}>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(event)=>{
              setMessage(event.target.value)
            }}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            
              {VARIANT_OPTIONS.map((value)=>
              <label key={value} htmlFor={`variant-${value}`}>
              <input
                id={`variant-${value}`}
                type="radio"
                name="variant"
                value={value}
                checked={variant === value}
                onChange={event => {
                  setVariant(event.target.value)
                }}
              />
              {value}
            </label>)}       
          
           
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
