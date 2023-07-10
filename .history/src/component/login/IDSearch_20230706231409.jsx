import React, { useState } from "react";
import style from "./IDSearch.module.css";
import IDSearchPhone from "./IDSearchPhone";
import PasswordSearchPhone from "./PasswordSearchPhone";

export default function IDSearch() {
  const [click, setClick] = useState(false);
  const handleButton = () => {
    setClick(true);
  };
  return (
    <>
      <form action="" className={style.ID_SEARCH}>
        <label htmlFor="">이름</label>
        <input type="text" placeholder="이름 입력" className={style.name} />
        <label htmlFor="">휴대폰 번호</label>
        <input
          type="text"
          placeholder="- 없이 휴대폰 번호 입력"
          className={style.phone}
        />
      </form>
      {/* {click ? <IDSearchPhone /> : <PasswordSearchPhone />} */}
      <BTN onClick={handleButton} />
    </>
  );
}

function BTN({ desc }) {
  return <button className={style.bluebutton}>아이디 찾기</button>;
}
