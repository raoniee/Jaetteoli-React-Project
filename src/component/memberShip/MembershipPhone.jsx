import React, { useEffect, useState } from "react";
import style from "./MembershipPhone.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";

export default function MembershipPhone() {
    const membership = useSelector((state) => state.membership.value)
  const [userInfo, setUserInfo] = useState({
    argreements: membership.agreements,
    name: null,
    birthday: null,
    phone: null,
  });
  console.log(userInfo)
  const [checkPhone, setCheckPhone] = useState(null);
  const [isCheck, setIsCheck] = useState(false);
  const [remainingTime, setRemainingTime] = useState(180); // 초기 제한 시간을 3분(180초)으로 설정

  const changeNameHandler = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };
  const changeBirthdayHandler = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      birthday: e.target.value,
    }));
  };
  const changePhoneHandler = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      phone: e.target.value,
    }));
  };

  const changeCheckPhoneHandler = (e) => {
    setCheckPhone(e.target.value);
  };

  const sendNumberHandler = (e) => {
    e.preventDefault()
    // 유효성 검사 및 인증번호 전송 로직
    setIsCheck(true);
    console.log(userInfo)
  };

  useEffect(() => {
    if (isCheck) {
      if (remainingTime > 0) {
        const timer = setTimeout(() => {
          setRemainingTime((prevTime) => prevTime - 1); // 1초씩 감소
        }, 1000);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
      } else {
        alert("인증 시간이 만료되었습니다. 인증을 다시 진행해주세요.");
        setIsCheck(false);
      }
    }
  }, [remainingTime, isCheck]);

  return (
    <div className={style.container}>
      <Header />
      <div className={style.Search}>
        <span className={style.title}>
          회원 정보를 입력 후, 가입을 완료해주세요.
        </span>
        <form action="" className={style.SIGNUP_PHONE}>
          <label htmlFor="">이름</label>
          <input
            type="text"
            placeholder="이름 입력"
            className={style.name}
            onChange={changeNameHandler}
          />
          <label htmlFor="">생년월일</label>
          <input
            type="text"
            placeholder="1998.05.04"
            className={style.phone}
            onChange={changeBirthdayHandler}
          />
          <label htmlFor="">휴대폰 번호</label>
          <div className={`${style.inputContainer} ${style.phoneContainer}`}>
            <input
              type="text"
              placeholder="- 없이 휴대폰 번호 입력"
              className={style.certification}
              onChange={changePhoneHandler}
            />
            <button className={style.phoneBtn} onClick={sendNumberHandler}>
              인증번호 받기
            </button>
          </div>
          <label htmlFor="">인증번호</label>
          <div className={style.inputContainer}>
            <input
              type="text"
              placeholder="인증번호 입력"
              className={style.certification}
              onChange={changeCheckPhoneHandler}
            />
            {isCheck && (
              <span className={style.remainingTime}>
                {Math.floor(remainingTime / 60)}분 {remainingTime % 60}초
              </span>
            )}
          </div>
          <p className={style.phoneretry}>
            인증번호 전송은 통신사에 따라 최대 1분까지 소요할 수 있습니다.
            인증번호가 도착하지 않으면 <strong>인증번호 재전송</strong>을
            눌러주세요.
          </p>
        </form>

        <BTN />
      </div>
      <Footer />
    </div>
  );
}

function BTN() {
  return (
    <>
      <button className={style.bluebutton}>다음</button>
    </>
  );
}
