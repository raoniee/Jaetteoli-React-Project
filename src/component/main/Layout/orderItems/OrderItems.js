import { useEffect, useState, useRef } from 'react';
import OrderStatus from '../orderStatus/OrderStatus';
import OrderItem from './OrderItem';
import classes from './OrderItems.module.css';

const OrderItems = (props) => {
    const [receptionStatus, setReceptionStatus] = useState('waiting');
    const innerContainerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (innerContainerRef.current) {
            innerContainerRef.current.scrollTop = 0;
        }
    }, [receptionStatus]);

    const onReceptionHandler = (reception) => {
        setReceptionStatus(reception);
    };

    return (
        <div className={classes['outer-container']}>
            <div className={classes['button-container']}>
                <OrderStatus onShowStore={props.onShowStore} onReceptionHandler={onReceptionHandler} />
            </div>
            <div className={classes['inner-container']} ref={innerContainerRef}>
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
                <OrderItem isStatus={receptionStatus} onClick={props.onShowPrint} />
            </div>
        </div>
    );
};

export default OrderItems;
