import { NavLink } from 'react-router-dom';
import classes from './OrderButton.module.css';

const OrderButton = (props) => {
    const clickHandler = () => {
        if (typeof props.onShowStore === 'function') {
            props.onShowStore();
        }
    };

    return (
        <NavLink to={props.to} className={({ isActive }) =>
            isActive ? `${classes['order-button']} ${classes[props.classes]} ${classes.active}` : `${classes['order-button']} ${classes[props.classes]}`
        } onClick={clickHandler}>
            {props.content}
        </NavLink>
    );
};

export default OrderButton;