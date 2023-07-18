import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button className={classes['custom-btn']} onClick={props.onClick}>
            오늘의 떨이 등록하기
        </button>
    )
}

export default Button;