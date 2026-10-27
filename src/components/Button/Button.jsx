import style from "./Button.module.css";

export function Button({onClick}) {
    return (
        <button type="button" className={style.button} onClick={onClick}>Load More</button>
    )
}