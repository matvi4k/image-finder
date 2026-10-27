import s from './Modal.module.css'

export function Modal({src, onClose}) {

  const handleKeyDown = (e) => {
    if (e.code === "Escape") onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };
  
  return (
    <div className={s.backdrop} onClick={handleBackdropClick} id="backdrop">
      <div className={s.modalContent} id="modal">
        <img src={src} alt="Modal image" id="image" />
      </div>
    </div>
  );
}