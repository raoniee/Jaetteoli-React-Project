import OrderStatus from '../orderStatus/OrderStatus';
import OrderItem from './OrderItem';
import classes from './OrderItems.module.css'

const OrderItems = (props) => {
    return (
        <div className={classes['outer-container']}>
            <OrderStatus />
            <div className={classes['inner-container']}>
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </div>
        </div>

    )
}

export default OrderItems;