import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {
    const clickHandler = (event) => {
      if (event.key === 'Escape') {
        callback();
      }
    };
    
    window.addEventListener('keydown', clickHandler);

    return () => {
      window.removeEventListener('keydown', clickHandler);
    };
  }, [callback]);
}

export default useEscapeKey; 