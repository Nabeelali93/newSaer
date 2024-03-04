import { useEffect, useRef } from 'react';

function useOutsideClick(ref, isOpen, closeModal) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeModal, ref]);
}

export default useOutsideClick;
