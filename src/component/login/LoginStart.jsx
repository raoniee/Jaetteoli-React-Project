import React, { useState } from "react";
import style from "./LoginStart.module.css";
import { useDispatch } from "react-redux";

export default function LoginStart() {

  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  const dispatch = useDispatch()

  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  async function onClickLogin() {
    const requestBody = {
      uid: inputId,
      password: inputPw
    }

    console.log(requestBody)
    const response = await fetch('https://www.insung.shop/jat/sellers/login', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(requestBody)
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div className={style.LoginStart}>
      <span className={style.title}>로그인</span>
      <form action="" className={style.LOGIN_FORM}>
        <input type="text" placeholder="아이디" className={style.id} onChange={handleInputId} />
        <input type="text" placeholder="비밀번호" className={style.password} onChange={handleInputPw} />
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
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
