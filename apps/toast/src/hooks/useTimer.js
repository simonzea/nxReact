import React from 'react';

function useTimer(callback, toasts, delay=5000) {
  React.useEffect(() => {
    const timer = setTimeout(() => callback(toasts.at(0)?.key), delay);
    
    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
}

export default useTimer;