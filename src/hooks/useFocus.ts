import React from 'react';

export const useFocus = (htmlElRef: React.RefObject<any>) => {
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return { setFocus };
};
