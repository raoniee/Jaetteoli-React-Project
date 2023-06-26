import classes from './SideBar.module.css'
import arrow from '../../../assets/down-arrow.png'

const SideBar = (props) => {
    return (
        <div className={classes.wrapper}>
            <ui className={classes.mainMenu}>
                <li id="tteoli" className={classes.item}>
                    <a href="#tteoli" className={classes.btn}><i></i>오늘의 떨이 <img src={arrow} alt='arrow' /></a>
                    <div className={classes.subMenu}>
                        <a href="">· 떨이 등록/수정</a>
                        <a href="">· 주문 현황</a>
                    </div>
                </li>
                <li className={classes.item} id="management">
                    <a href="#management" className={classes.btn} ><i></i>가게 관리 <img src={arrow} alt='arrow' /> </a>
                    <div className={classes.subMenu} >
                        <a href="">· 리뷰 관리/수정</a>
                        <a href="">· 매출관리</a>
                    </div>
                </li>
                <li className={classes.item} id="operation">
                    <a href="#operation" className={classes.btn}><i></i>가게 운영 <img src={arrow} alt='arrow' /> </a>
                    <div className={classes.subMenu} >
                        <a href="">· 가게 정보 수정</a>
                        <a href="">· 임시 운영 정지</a>
                    </div>
                </li>
            </ui>
        </div>
    )
}

export default SideBar