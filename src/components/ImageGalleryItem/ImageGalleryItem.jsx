import style from "./ImageGalleryItem.module.css";

export function ImageGalleryItem({ src, alt, onClick, largeURL }) {
  const handleClick = () => {
    onClick(largeURL)
  }

  return (
    <li className={style.item}>
      <button
        type="button"
        className={style.imageButton}
        onClick={handleClick}
        aria-label={`View ${alt}`}
      >
        <img className={style.image} src={src} alt={alt} />
      </button>
    </li>
  );
}