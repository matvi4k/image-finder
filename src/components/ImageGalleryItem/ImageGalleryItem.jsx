import s from './ImageGalleryItem.module.css'

export function ImageGalleryItem({ src, alt, onClick, largeURL }) {
  const handleClick = () => {
    onClick(largeURL)
  }

  return (
    <li className={s.item} onClick={handleClick}>
      <img src={src} alt={alt} />
    </li>
  );
}