import React, { useState, useEffect } from "react";
import style from "./IDSearchPhone.module.css";

export default function IDSearchPhone(props) {
  const [remainingTime, setRemainingTime] = useState(180); // 초기 제한 시간을 3분(180초)으로 설정

  useEffect(() => {
    if (remainingTime >= 0) {
      const timer = setTimeout(() => {
        setRemainingTime(remainingTime - 1); // 1초씩 감소
      }, 1000);

      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }else {
      alert("인증 시간이 만료되었습니다. 인증을 다시 진행해주세요.");
      props.remainHandler();
    }
  }, [remainingTime, props]);

  return (
    <>
      <form action="" className={style.ID_SEARCH}>
        <label htmlFor="">인증번호</label>
        <div className={style.inputContainer}>
          <input
            type="text"
            placeholder="인증번호 입력"
            className={style.certification}
          />
          <span className={style.remainingTime}>
            {Math.floor(remainingTime / 60)}분 {remainingTime % 60}초
          </span>
        </div>
      </form>
      <p className={style.phoneretry}>
        인증번호 전송은 통신사에 따라 최대 1분까지 소요할 수 있습니다.
        인증번호가 도착하지 않으면 <strong>인증번호 재전송</strong>을
        눌러주세요.
      </p>
    </>
  );
}
