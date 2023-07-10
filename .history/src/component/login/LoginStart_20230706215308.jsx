import React, { useState } from "react";
import style from "./LoginStart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function LoginStart() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.value);
  const navigate = useNavigate();

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

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
    const response = await fetch("https://www.insung.shop/jat/sellers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    if (!data["isSuccess"]) {
      console.log(data["message"]);
      return;
    }
    const loginSuccess = data["result"];
    dispatch(
      login({
        jwt: loginSuccess.jwt,
        name: loginSuccess.name,
        firstLogin: loginSuccess["first_login"],
        menuRegister: loginSuccess["menu_register"],
      })
    );

    console.log(loginSuccess["first_login"]);
    console.log(loginSuccess["menu_register"]);
    if (
      loginSuccess["first_login"] === 1 &&
      loginSuccess["menu_register"] === 1
    ) {
      // alert('관리자가 승인 후에 이용가능합니다.')
      return navigate("/register/store");
    } else if (
      loginSuccess["first_login"] === 0 &&
      loginSuccess["menu_register"] === 1
    ) {
      alert("관리자가 승인 후에 이용가능합니다.");
      return navigate("/register/menu");
    } else {
      return navigate("/today/menu");
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
            onChange={handleInputId}
          />
          <input
            type="text"
            placeholder="비밀번호"
            className={style.password}
            onChange={handleInputPw}
          />
        </form>
        <div className={style.login_options}>
          <div className={style.left}>
            <input type="checkbox" className={style.checkbox} />
            <label htmlFor="">아이디 저장</label>
          </div>
          <div className={style.right}>
            <p>아이디 - 비밀번호 찾기</p>
            <p>회원가입</p>
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
