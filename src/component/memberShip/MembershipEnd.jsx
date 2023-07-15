import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import style from "./MembershipEnd.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MembershipEnd() {
  const navigate = useNavigate();
  const membership = useSelector((state) => state.membership.value);

  const moveFirstScreenHandler = () => {
    navigate("/");
  };

  return (
    <div className={style.container}>
      <Header login="login" />
      <div className={style.MembershipEnd}>
        <span className={style.title}>재떨이 사장님 가입을 축하드립니다!</span>
        <p className={style.title_desc1}>
          재떨이 사장님 계정이 생성되었습니다.
        </p>
        <p className={style.title_desc2}>
          회원정보를 확인 후 서비스 이용을 위한 약관 동의를 계속 진행해주세요.
        </p>

        <div className={style.wrap}>
          <div className={style.left}>
            <span>기본 회원 정보</span>
            <div className={style.profile}>
              <ul className={style.profile_left}>
                <li>아이디</li>
                <li>이름</li>
                <li>생년월일</li>
                <li>휴대폰번호</li>
                <li>이메일</li>
              </ul>
              <ul className={style.profile_right}>
                <li>{membership.result.uid}</li>
                <li>{membership.result.name}</li>
                <li>{membership.result.birthday}</li>
                <li>{membership.result.phone}</li>
                <li>{membership.result.email}</li>
              </ul>
            </div>
          </div>

          <div className={style.right}>
            <span>광고성 정보 수신 등의 처리 결과</span>
            <div className={style.result}>
              <ul className={style.result_left}>
                <li>처리 날짜</li>
                <li>SMS</li>
                <li>이메일</li>
                <li>전화</li>
              </ul>
              <ul className={style.result_right}>
                <li>{membership.result.completeDate}</li>
                <li>
                  {membership.result.smsCheck === 1 ? "수신 동의" : "수신 거부"}
                </li>
                <li>
                  {membership.result.emailCheck === 1
                    ? "수신 동의"
                    : "수신 거부"}
                </li>
                <li>
                  {membership.result.callCheck === 1
                    ? "수신 동의"
                    : "수신 거부"}
                </li>
              </ul>
            </div>

            <p>재떨이 광고성 정보 수신 설정이 완료되었습니다.</p>
          </div>
        </div>
        <p className={style.correction}>
          위 내용은 재떨이 정보 수정 에서 수정할 수 있습니다.
        </p>
        <button className={style.bluebutton} onClick={moveFirstScreenHandler}>
          재떨이 서비스 시작하기!
        </button>
      </div>
      <Footer />
    </div>
  );
}
