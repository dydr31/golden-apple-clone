import bag from '../../pics/plus.png'
import classes from './AddToCartHoverButton.module.css'

export const AddToCartButton = props => {
    return(
        <button className={classes['add-to-cart-button']} onClick={props.onClick}>
            <img src={bag}/>
        </button>
    )
}