import classes from './OrderStatus.module.css'
import OrderButton from '../../UI/OrderButton'

const OrderStatus = (props) => {
    return (
        <div className={classes['order-container']}>
            <OrderButton classes='order' content='접수대기' to='/main2' />
            <OrderButton classes='order' content='처리중' to='/main3/process' />
            <OrderButton classes='order' content='완료' to='/main3/complete' />
            <OrderButton classes='order' content='떨이 등록 / 수정' to='/tteoli' />
            <OrderButton classes='finish' content='영업 종료' onShowStore={props.onShowStore} />
        </div>
    )
}

export default OrderStatus;