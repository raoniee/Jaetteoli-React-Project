import React from "react";
import style from "./PasswordSearch.module.css";
import PasswordSearchPhone from "./PasswordSearchPhone";

export default function PasswordSearch() {
  const [button, setButton] = useState(false);
  const handleButton = () => {
    setButton(true);
  };
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
      {button ? <PasswordSearchPhone /> : ""}
      <BTN onClick={handleButton} value={button} />
    </>
  );

  function BTN({ value, onClick }) {
    return (
      <button
        className={style.bluebutton}
        onClick={() => {
          onClick();
        }}
      >
        {value ? "아이디 찾기" : "인증번호 받기"}
      </button>
    );
  }
}
