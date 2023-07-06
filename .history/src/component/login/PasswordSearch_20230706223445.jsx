import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import style from "./PasswordSearch.module.css";

export default function PasswordSearch() {
  return (
    <>
      <form action="" className={style.PASSWORD_SEARCH}>
        <label htmlFor="">아이디</label>
        <input type="text" placeholder="아이디 입력" className={style.id} />
        <label htmlFor="">휴대폰 번호</label>
        <input
          type="text"
          placeholder="- 없이 휴대폰 번호 입력"
          className={style.phone}
        />
      </form>
      <button className={style.bluebutton}>인증번호 받기</button>
    </>
  );
}
