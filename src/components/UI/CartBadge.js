import classes from './CartBadge.module.css'

export const CartBadge = props => {
    
    return (
        <div className={classes['cart-badge']}>
            <p>{props.number}</p>
        </div>
    )
}