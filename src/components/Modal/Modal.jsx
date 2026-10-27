import { useEffect } from "react";
import style from './Modal.module.css'

export function Modal({src, onClose}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };
  
  return (
    <div className={style.backdrop} onClick={handleBackdropClick} id="backdrop">
      <div className={style.modalContent} id="modal">
        <img src={src} alt="Modal image" id="image" />
      </div>
    </div>
  );
}