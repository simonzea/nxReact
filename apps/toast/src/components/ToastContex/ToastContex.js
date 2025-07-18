import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children, ...props}){
  const [toasts, setToasts] = React.useState([]);
 
  const handleAddToast = ({variant, message})=>{
    const newkey = crypto.randomUUID();
    setToasts((prev)=> [...prev, 
      {
        key: newkey, 
        variant: variant,
        message: message,
      }]);
      };
      
  const handleClose = (key)=>{
    setToasts((prev)=> prev.filter((toast)=> toast.key !== key));
  }

  const resetAllToasts = ()=>{
    setToasts([]);
  }

  return <ToastContext.Provider value={{toasts, handleClose, handleAddToast, resetAllToasts}} {...props}>{children}</ToastContext.Provider>
} 

export default ToastProvider;

