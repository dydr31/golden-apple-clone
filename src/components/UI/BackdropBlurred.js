import classes from './BackdropBlurred.module.css'

export const BackdropBlurred = props => {
    return <div className={classes['backdrop-blurred']} onClick={props.onClick}/>
}