import { Link } from 'react-router-dom'
import classes from './Banner.module.css'

export const Banner = () => {
    return (
    <Link to='/on-sale'>
    <div className={classes['banner']}>
        <p>Don't miss our annual sale! Up to 20% off on some items!</p>
    </div>
    </Link>)
}