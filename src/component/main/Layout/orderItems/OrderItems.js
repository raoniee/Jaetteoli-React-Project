import OrderStatus from '../orderStatus/OrderStatus';
import OrderItem from './OrderItem';
import classes from './OrderItems.module.css'

const OrderItems = (props) => {
    return (
        <div className={classes['outer-container']}>
            <OrderStatus onShowStore={props.onShowStore} />
            <div className={classes['inner-container']}>
                <OrderItem isStatus={props.isStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={props.isStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={props.isStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={props.isStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={props.isStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={props.isStatus} onClick={props.onShowPrint} />
            </div>
        </div>

    )
}

export default OrderItems;