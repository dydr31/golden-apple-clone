import close from "../../../pics/close.png";
import classes from './CloseIcon.module.scss'

export const CloseIcon = (props) => {
    return (
        <img 
        src={close}
        className={classes["close-icon"]}
        onClick={props.onClick}/>
    )
}