import { Link } from 'react-router-dom'
import style from './Login.module.css'
import { getFirstLogin, getMenuRegister, getStoreStatus } from '../../store/auth'
import { getCookieToken } from "../../store/common/Cookie";
import { useEffect, useState } from 'react'

const Login = () => {
    const [firstLogin, setFirstLogin] = useState(null);
    const [menuRegister, setMenuRegister] = useState(null);
    const [storeStatus, setStoreStatus] = useState(null);
    const [token, setToken] = useState(null)

    useEffect(() => {
        setToken(getCookieToken());
        setFirstLogin(getFirstLogin());
        setMenuRegister(getMenuRegister());
        setStoreStatus(getStoreStatus());
    }, [])
    return (
        <div>
            {!token &&
                <div className={style.btnContainer}>
                    <Link to='/login'><button className={style.login}>Log in</button></Link>
                    <Link to='/signup/agree'><button className={style.signup}>회원가입</button></Link>
                </div>
            }
            {(token && firstLogin === '1' && menuRegister === '1' && storeStatus === 'null') &&
                <div className={style.btnContainer}>
                    <Link to='/register/store'><button className={style.signup}>가게 등록하기</button></Link>
                </div>
            }
            {(token && firstLogin === '1' && menuRegister === '1' && storeStatus === 'W') &&
                <div className={style.btnContainer} onClick={()=>alert('아직 가게 승인이 이루어지지 않았습니다. 가게 승인 후 메뉴가 등록 가능합니다. 승인이 완료될 때까지 조금만 기다려주세요')}>
                    <button className={style.signup}>메뉴 등록하기</button>
                </div>
            }
            {(token && firstLogin === '0' && menuRegister === '1' && storeStatus === 'A') &&
                <div className={style.btnContainer}>
                    <Link to='/register/menu'><button className={style.signup}>메뉴 등록하기</button></Link>
                </div>
            }
            {(token && firstLogin === '0' && menuRegister === '0' && storeStatus === 'A') &&
                <div className={style.btnContainer}>
                    <Link to='/today/menu'><button className={style.signup}>오늘의 떨이 등록/수정하기</button></Link>
                </div>
            }
            {(token && firstLogin === '99' && menuRegister === '99') &&
                <div className={style.btnContainer}>
                    <Link to='/admin/register'><button className={style.signup}>관리자 화면 바로가기</button></Link>
                </div>
            }
        </div>
    )
}

export default Login