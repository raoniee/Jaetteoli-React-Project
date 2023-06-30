import classes from './OrderButton.module.css'

const OrderButton = (props) => {
    return (
        <button className={`${classes['order-button']} ${classes[props.classes]}`} onClick={props.onShowStore ? props.onShowStore : ''}>
            {props.content}
        </button>
    )
}

export default OrderButton