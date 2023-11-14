import { useEffect, useRef, useState } from 'react';

export const useToggleFocus = () => {
  const elementRef = useRef<HTMLTextAreaElement>(null);
  const [arrowToggled, setArrowToggled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsFocused(arrowToggled);
  }, [arrowToggled]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const toggleArrow = () => {
    if (elementRef.current) {
      if (document.activeElement === elementRef.current) {
        elementRef.current.blur();
      } else {
        elementRef.current.focus();
      }
    }
    setArrowToggled(!arrowToggled);
  };

  return {
    elementRef,
    arrowToggled,
    isFocused,
    handleFocus,
    handleBlur,
    toggleArrow,
  };
};
