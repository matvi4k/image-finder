import s from './Button.module.css'

export function Button({onClick}) {
    return (
        <button type="button" className={s.button} onClick={onClick}>Load More</button>
    )
}