import React, { useEffect, useState } from "react";
import style from "./LoginStart.module.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { SET_AUTH, TOKEN_TIME_OUT } from "../../store/auth";
import { getCookieToken, getStoreUid, setStoreUid, setToken } from "../../store/common/Cookie";

export default function LoginStart() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  useEffect(() => {
    const storedUid = getStoreUid();
    if (storedUid) {
      setInputId(storedUid);
    }
  }, []);

  async function onClickLogin() {
    if (inputId.trim() === "" || inputPw.trim() === "") {
      console.log("아이디또는 비밀번호를 입력해주세요.");
      return;
    }

    const requestBody = {
      uid: inputId,
      password: inputPw,
    };

    console.log(requestBody);
    try {
      const response = await fetch(
        "https://www.insung.shop/jat/sellers/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      if (!data["isSuccess"]) {
        console.log(data["code"]);
        console.log(data["message"]);
        return;
      }
      const loginSuccess = data["result"];

      setToken(loginSuccess.jwt);
      if(isChecked){
        setStoreUid(inputId)
      }
      //각 상태 localStorage.setItem
      localStorage.setItem("firstLogin", loginSuccess["first_login"]);
      localStorage.setItem("menuRegister", loginSuccess["menu_register"]);
      localStorage.setItem("storeStatus", loginSuccess["store_status"]);

      dispatch(
        SET_AUTH({
          authenticated: true,
          accessToken: loginSuccess.jwt,
          expireTime: new Date().getTime() + TOKEN_TIME_OUT,
          name: loginSuccess.name,
          storeName: loginSuccess["store_name"],
          firstLogin: loginSuccess["first_login"],
          storeStaute: loginSuccess["store_status"],
          menuRegister: loginSuccess["menu_register"],
        })
      );

      //관리자
      if (
        loginSuccess["first_login"] === 99 &&
        loginSuccess["menu_register"] === 99
      ) {
        //관리자용 페이지 이동
        return navigate("/admin/register");
      }

      console.log(loginSuccess);
      console.log(`쿠키 jwt 확인 : ${getCookieToken()}`);

      //사장님
      if (
        //최초 회원가입시 가게 정보를 기입해야함 && 가게 등록하지 않고 초기화면이나 로그아웃했을때 -> 가게 등록 화면
        loginSuccess["first_login"] === 1 &&
        loginSuccess["menu_register"] === 1 &&
        loginSuccess["store_status"] === null
      ) {
        return navigate("/register/store");
      } else if (
        //가게 등록 요청은 했는데 관리자가 아직 승인을 안할 때 -> 초기화면
        loginSuccess["first_login"] === 1 &&
        loginSuccess["menu_register"] === 1 &&
        loginSuccess["store_status"] === "W"
      ) {
        alert(
          "점주님의 가게가 승인 대기중입니다. 승인이 완료될 때까지 조금만 기다려주세요."
        );
        return navigate("/");
      } else if (
        //관리자가 가게 승인을 했지만 메뉴 등록을 안했을때 -> 메뉴등록 화면
        loginSuccess["first_login"] === 0 &&
        loginSuccess["menu_register"] === 1 &&
        loginSuccess["store_status"] === "A"
      ) {
        return navigate("/register/menu");
      } else if (
        //관리자가 승인도 했고 메뉴 등록도 완료 했을 때 -> 오늘의 떨이 등록/수정 화면
        loginSuccess["first_login"] === 0 &&
        loginSuccess["menu_register"] === 0 &&
        loginSuccess["store_status"] === "A"
      ) {
        return navigate("/today/menu");
      }
    } catch (err) {
      console.log("서버가 아직 안켜져있습니다.");
      console.log(err);
    }
  }

  return (
    <div className={style.container}>
      <Header />
      <div className={style.LoginStart}>
        <span className={style.title}>로그인</span>
        <form action="" className={style.LOGIN_FORM}>
          <input
            type="text"
            placeholder="아이디"
            className={style.id}
            value={inputId}
            onChange={handleInputId}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className={style.password}
            onChange={handleInputPw}
          />
        </form>
        <div className={style.login_options}>
          <div className={style.left}>
            <input
              type="checkbox"
              className={style.checkbox}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="">아이디 저장</label>
          </div>
          <div className={style.right}>
            <Link to="/help">아이디 - 비밀번호 찾기</Link>
            <Link to="/signup/agree">회원가입</Link>
          </div>
        </div>
        <button className={style.bluebutton} onClick={onClickLogin}>
          로그인
        </button>
      </div>
      <Footer />
    </div>
  );
}
