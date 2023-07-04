import { useState } from 'react';
import OrderStatus from '../orderStatus/OrderStatus';
import OrderItem from './OrderItem';
import classes from './OrderItems.module.css'

const OrderItems = (props) => {

    const [receptionStatus, setReceptionStatus] = useState('waiting')

    const onReceptionHandler = (reception) => {
        console.log(reception)
        setReceptionStatus(reception)
    }

    return (
        <div className={classes['outer-container']}>
            <div className={classes['button-container']}>
                <OrderStatus onShowStore={props.onShowStore} onReceptionHandler={onReceptionHandler} />
            </div>
            <div className={classes['inner-container']}>
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
            </div>
        </div>

    )
}

export default OrderItems;