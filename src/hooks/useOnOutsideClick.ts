import { useEffect, useRef } from 'react';

export const useOnOutsideClick = (handleOutsideClick) => {
  const innerRef = useRef<HTMLElement>();

  const onClick = (event) => {
    if (innerRef.current && !innerRef.current.contains(event.target)) {
      handleOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
    };
  }, []);

  return { innerRef };
};
