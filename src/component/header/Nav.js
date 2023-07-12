import { useNavigate } from "react-router";
import { getCookieToken } from "../../store/common/Cookie";
import style from "./Nav.module.css";

const Nav = (props) => {

  const navigate = useNavigate()
  const jwt = getCookieToken();
  console.log(jwt)

  const moveLoginHandler = () => {
    navigate('/login')
  }

  if(jwt){
    return <button className={style.nav_btn}>로그아웃</button>;
  }

  return (
    <>
      {props.login ? <button className={style.nav_btn} onClick={moveLoginHandler} >로그인</button> : <></> }
    </>
  );
  
};

export default Nav;
