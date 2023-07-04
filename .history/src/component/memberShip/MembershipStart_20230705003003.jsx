import React, { useState } from "react";
import style from "./MembershipStart.module.css";
import { ReactComponent as CheckOff } from "../../assets/images/check_off.svg";
import { ReactComponent as CheckOn } from "../../assets/images/check_on.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import AgreeAlert from "./AgreeAlert.jsx";

// AgreeList 컴포넌트는 밑에 있어요!
export default function MembershipStart() {
  const [fullchecked, setFullChecked] = useState(false);
  const [checked, setChecked] = useState(true);
  const [click, setClick] = useState(false);
  const handleClose = () => {
    setClick(false);
  };
  const handleFullCheked = () => {
    setFullChecked((prev) => !prev);
    if (fullchecked === true) {
      setChecked(true);
    } else if (fullchecked === false) {
      setChecked(false);
    }
  };
  const handlechecked = () => {
    setChecked(false);
  };
  const handleClick = () => {
    setClick(true);
  };

  return (
    <div>
      <div className={style.start_contents}>
        <span className={style.start_title}>
          재떨이사장님 회원가입을 시작합니다.
        </span>
        <p className={style.start_desc}>
          재떨이사장님 회원이 되면 재떨이에서 제공하는 모든 사장님서비스를
          편하게 이용하실 수 있어요.
        </p>

        <div className={style.full_agreement}>
          <input
            id="checkbox"
            type="checkbox"
            value={fullchecked}
            onChange={handleFullCheked}
          />
          <label htmlFor="checkbox">전체 동의</label>
        </div>

        <div className={style.agree_first}>
          <span>서비스 이용을 위해 동의가 필요합니다.</span>
          <ul>
            <AgreeList
              checked={checked}
              arrow={true}
              more={click}
              onClick={handleClick}
              desc="[필수] 이용약관 동의"
            />
            <AgreeList
              checked={checked}
              arrow={true}
              onClick={handleClick}
              desc="[필수] 개인정보 수집이용 동의"
            />
          </ul>
        </div>

        <div className={style.agree_second}>
          <span>특별한 혜택과 최신 소식을 받아보세요!</span>
          <ul className={style.top}>
            <AgreeList
              checked={checked}
              desc="[선택] 서비스/이벤트 정보 제공을 위한 개인정보 수집 이용 동의"
            />
            <AgreeList
              checked={checked}
              arrow={true}
              desc="[선택] 광고성 정보 수신동의"
            />
          </ul>
          <ul className={style.option}>
            <AgreeList checked={checked} desc="SMS" />
            <AgreeList checked={checked} desc="이메일" />
            <AgreeList checked={checked} desc="전화" />
          </ul>
          <p className={style.information}>
            재떨이 회사가 제공하는 서비스의 광고성 정보를 수신합니다.
          </p>
        </div>

        <a className={style.phone_agree} href="">
          <p>휴대폰으로 인증하기</p>
        </a>
      </div>
      {click && <AgreeAlert individual={handlechecked} onClick={handleClose} />}
    </div>
  );
}

function AgreeList({ onClick, checked, desc, arrow }) {
  return (
    <li>
      {checked ? <CheckOff /> : <CheckOn />}
      <p onClick={() => onClick()}>{desc}</p>
      {arrow && <Arrow />}
    </li>
  );
}
