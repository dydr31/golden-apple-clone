import classes from './ButtonBlack.module.css'

export const ButtonBlack = props => {
    return <button className={classes['button-black']} onClick={props.onClick} type={props.type}>
        {props.text}
    </button>
}