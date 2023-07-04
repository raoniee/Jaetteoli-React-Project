import Modal from "../../UI/Modal"
import classes from './PrintOrder.module.css'

const PrintOrder = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className={classes.container}>
                <div className={classes.top}>
                    <span>주문표</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClose} >
                        <g id="Frame" clip-path="url(#clip0_811_577)">
                            <path id="Color" d="M12 1.5L10.5 0L6 4.5L1.5 0L0 1.5L4.5 6L0 10.5L1.5 12L6 7.5L10.5 12L12 10.5L7.5 6L12 1.5Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_811_577">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={classes['order-print']}>
                    <table className={classes.table}>
                        <tr className={classes.blank}>
                            <td className={classes['td-title']}>일자</td>
                            <td className={classes['td-content']}>2023-06-25</td>
                            <td className={classes['td-title']}>결제여부</td>
                            <td className={classes['td-content']}>카드 결제 완료</td>
                        </tr>
                        <tr className={classes.blank}>
                            <td className={classes['td-title']}>픽업시간</td>
                            <td className={classes['td-content']}>18:25</td>
                            <td className={classes['td-title']}>주문번호</td>
                            <td className={classes['td-content']}>03</td>
                        </tr>
                        <tr className={`${classes.blank} ${classes['final-blank']}`}>
                            <td className={classes['td-title']}>주문 내역</td>
                            <td className={classes['td-content']}>연어 샐러드 1개<br />고개 샐러드 1개</td>
                            <td className={classes['td-title']}>요구 사항</td>
                            <td className={classes['td-content']}>연어 샐러드에서 연어는 빼주시고 맛있는거 주세요!!!</td>
                        </tr>
                    </table>
                </div>
            </div>
        </Modal>
    )
}

export default PrintOrder