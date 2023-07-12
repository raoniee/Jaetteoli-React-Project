import React, { useState, useEffect } from "react";
import style from "./IDSearch.module.css";
import IDSearchPhone from "./IDSearchPhone";

export default function IDSearch() {
  const [button, setButton] = useState(false);
  const [inputName, setInputName] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [inputPhone, setInputPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState(true);
  const [validCheck, setValidCheck] = useState(true);

  const handleButton = () => {
    if (inputName.trim() === "" && inputPhone.trim() === "") {
      setValidCheck(false);
      return;
    } else {
      setValidCheck(true);
    }
    if (inputName.trim() === "") {
      setNameValid(false);
      return;
    } else {
      setNameValid(true);
    }
    if (inputPhone.trim() === "") {
      setPhoneValid(false);
      return;
    } else {
      setPhoneValid(true);
    }
    setButton(true);
  };

  const phoneRemainingTimeHandler = () => {
    setButton(false);
  };

  const handleInputId = (e) => {
    setInputName(e.target.value);
  };

  const handleInputPhone = (e) => {
    setInputPhone(e.target.value);
  };

  return (
    <>
      <form action="" className={style.ID_SEARCH}>
        <label htmlFor="">이름</label>
        <input
          type="text"
          placeholder="이름 입력"
          className={style.name}
          onChange={handleInputId}
        />
        {!nameValid && <p>이름을 확인해주세요</p>}
        {!validCheck && <p>이름을 확인해주세요</p>}
        <label htmlFor="">휴대폰 번호</label>
        <input
          type="text"
          placeholder="- 없이 휴대폰 번호 입력"
          className={style.phone}
          onChange={handleInputPhone}
        />
        {!phoneValid && <p>전화번호 확인해주세요</p>}
        {!validCheck && <p>전화번호 확인해주세요</p>}
      </form>
      {button && nameValid && phoneValid && validCheck && (
        <IDSearchPhone remainHandler={phoneRemainingTimeHandler} />
      )}
      <BTN onClick={handleButton} value={button} />
    </>
  );
}

function BTN({ value, onClick }) {
  return (
    <button className={style.bluebutton} onClick={onClick}>
      {value ? "아이디 찾기" : "인증번호 받기"}
    </button>
  );
}
