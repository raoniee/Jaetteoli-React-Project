import React, { useCallback, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import style from "./MembershipInformation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_AGREEMENT } from "../../store/membership";

export default function MembershipInformation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const membership = useSelector((state) => state.membership.value);

  const [userInfo, setUserInfo] = useState({
    agreements: membership.agreements,
    name: membership.name,
    birthday: membership.birthday,
    phone: membership.phone,
    uid: membership.uid,
    password: membership.password,
    email: membership.email,
  });

  const [firstEmail, setFirstEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [isValid, setIsValid] = useState({
    uid: true,
    password: true,
    checkPassword: true,
    email: true,
  });

  const [isClicked, setIsClicked] = useState({
    uid: false,
    password: false,
    checkPassword: false,
    email: false,
  });

  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [selectedEmailOption, setSelectedEmailOption] = useState("직접 입력");
  const [typingEmail, setTypingEmail] = useState("");
  const emailOptions = [
    "직접 입력",
    "naver.com",
    "gmail.com",
    "daum.net",
    "hanmail.net",
    "mail.ulsan.ac.kr",
  ];

  const changeUidHandler = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      uid: e.target.value,
    }));
  };

  const changePasswordHandler = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const changeEmailHandler = (e) => {
    setFirstEmail(e.target.value);
  };

  const changeCheckPasswordHandler = (e) => {
    setCheckPassword(e.target.value);
  };

  const [duplicateUid, setDuplicateUid] = useState({
    valid: true,
    click: true,
  });

  const validateUid = useCallback(() => {
    const isValidFormat = /^[a-zA-Z0-9]{4,20}$/.test(userInfo.uid);
    setIsValid((prev) => ({
      ...prev,
      uid: isValidFormat,
    }));
    setIsClicked((prev) => ({
      ...prev,
      uid: true,
    }));
  }, [userInfo.uid]);

  const validatePassword = useCallback(() => {
    const isValidFormat =
      /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-=_+]{8,}|(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*()-=_+])[a-zA-Z0-9!@#$%^&*()-=_+]{10,}$/.test(
        userInfo.password
      );
    setIsValid((prev) => ({
      ...prev,
      password: isValidFormat,
    }));
    setIsClicked((prev) => ({
      ...prev,
      password: true,
    }));
  }, [userInfo.password]);

  const validateEmail = useCallback(() => {
    if (selectedEmailOption === "직접 입력") {
      const isValidEmailFormat =
        /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\.[a-zA-Z0-9]+$/.test(typingEmail);
      setIsValid((prev) => ({
        ...prev,
        email: isValidEmailFormat,
      }));
      setIsClicked((prev) => ({
        ...prev,
        email: true,
      }));
    } else {
      setIsValid((prev) => ({
        ...prev,
        email: true,
      }));
      setIsClicked((prev) => ({
        ...prev,
        email: true,
      }));
    }
  }, [typingEmail, selectedEmailOption]);

  const isCheckedPassword = useCallback(() => {
    if (checkPassword !== userInfo.password) {
      setIsValid((prev) => ({
        ...prev,
        checkPassword: false,
      }));
    } else {
      setIsValid((prev) => ({
        ...prev,
        checkPassword: true,
      }));
    }

    setIsClicked((prev) => ({
      ...prev,
      checkPassword: true,
    }));
  }, [userInfo.password, checkPassword]);

  useEffect(() => {
    if (isClicked.uid) {
      validateUid();
    }
  }, [userInfo.uid, isClicked.uid, validateUid]);

  useEffect(() => {
    if (isClicked.password) {
      validatePassword();
    }
  }, [userInfo.password, isClicked.password, validatePassword]);

  useEffect(() => {
    if (isClicked.email) {
      validateEmail();
    }
  }, [userInfo.email, isClicked.email, validateEmail]);

  useEffect(() => {
    if (isClicked.checkPassword) {
      isCheckedPassword();
    }
  }, [checkPassword, isClicked.checkPassword, isCheckedPassword]);

  const moveCompleteSignUpHandler = async (e) => {
    e.preventDefault();
    //중복확인 api
    try {
      const resquestBody = {
        uid: userInfo.uid,
      };
      const response = await fetch(
        "https://www.insung.shop/jat/sellers/id-duplicate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resquestBody),
        }
      );
      const data = await response.json();
      if (!data["isSuccess"]) {
        console.log(data["code"]);
        console.log(data["message"]);
        return;
      }
      const result = data["result"];
      if (result["duplicateCheck"] === 1) {
        //중복
        setDuplicateUid({
          valid: false,
          click: true,
        });
        return;
      } else {
        setDuplicateUid({
          valid: true,
          click: true,
        });
        //회원가입 신청 api
        const requestBody = {
          uid: userInfo.uid,
          name: userInfo.name,
          birthday: userInfo.birthday,
          phone: userInfo.phone,
          password: userInfo.password,
          email:
            selectedEmailOption === "직접 입력"
              ? `${firstEmail}@${typingEmail}`
              : `${firstEmail}@${selectedEmailOption}`,
          serviceCheck:
            userInfo.agreements.mandatoryOne && userInfo.agreements.mandatoryTwo
              ? 1
              : 0,
          personalCheck: userInfo.agreements.selectiveOne ? 1 : 0,
          smsCheck: userInfo.agreements.isSns ? 1 : 0,
          emailCheck: userInfo.agreements.isEmail ? 1 : 0,
          callCheck: userInfo.agreements.isPhone ? 1 : 0,
        };
        const response = await fetch("https://www.insung.shop/jat/sellers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
        const data = await response.json();
        if (!data["isSuccess"]) {
          console.log(data["code"]);
          console.log(data["message"]);
          return;
        }
        const result = data["result"];
        dispatch(
          SET_AGREEMENT({
            result: result,
          })
        );
      }
      navigate("/signup/complete");
    } catch (err) {
      console.log(err);
    }
  };

  const handleEmailOptionClick = (option) => {
    if (option === "직접 입력") {
      setFirstEmail("");
    }
    setSelectedEmailOption(option);
    setShowEmailOptions(false);
  };

  const changeLastEmailHandler = (e) => {
    setTypingEmail(e.target.value);
  };

  useEffect(() => {
    const selectOptions = document.querySelector(`.${style.select_options}`);
    if (selectOptions) {
      selectOptions.style.border = showEmailOptions
        ? "1px solid rgba(0, 0, 0, 0.5)"
        : "none";
    }
  }, [showEmailOptions]);

  return (
    <div className={style.container}>
      <Header login="login" />
      <div className={style.MembershipInformation}>
        <span className={style.title}>
          회원 정보를 입력 후, 가입을 완료해주세요.
        </span>

        <div className={style.wrap}>
          <form action="" className={style.ID}>
            <label htmlFor="">아이디</label>
            <input
              type="text"
              placeholder="영문 혹은 영문+숫자, 4~20자"
              onChange={changeUidHandler}
              onBlur={validateUid}
              value={userInfo.uid || ""}
            />
            {!isValid.uid && isClicked.uid && (
              <p className={style.validation}>
                영문 혹은 영문+숫자, 4~20자로 입력해주세요.
              </p>
            )}
            {!duplicateUid.valid && duplicateUid.click && (
              <p style={{ color: "red" }}>아이디가 중복됩니다.</p>
            )}
          </form>

          <form action="" className={style.PASSWORD}>
            <label htmlFor="">비밀번호</label>
            <label htmlFor="">
              영문+숫자 10자 이상 또는 영문+숫자+특수기호 8자 이상
            </label>
            <input
              type="password"
              placeholder="비밀번호 입력"
              onChange={changePasswordHandler}
              onBlur={validatePassword}
              value={userInfo.password || ""}
            />
            {!isValid.password && isClicked.password && (
              <p className={style.validation}>
                영문+숫자 10자 이상 또는 영문+숫자+특수기호 8자 이상으로
                입력해주세요.
              </p>
            )}
            <input
              type="password"
              placeholder="비밀번호 재입력"
              onChange={changeCheckPasswordHandler}
              onBlur={isCheckedPassword}
              value={checkPassword || ""}
            />
            {!isValid.checkPassword && isClicked.checkPassword && (
              <p className={style.validation}>비밀번호가 일치하지 않습니다.</p>
            )}
          </form>

          <form action="" className={style.EMAIL}>
            <label htmlFor="">이메일</label>
            <div className={style.email_input}>
              <input
                type="text"
                placeholder="이메일 앞자리"
                onChange={changeEmailHandler}
              />
              <label>@</label>
              {selectedEmailOption === "직접 입력" ? (
                <input
                  type="text"
                  placeholder="이메일 뒷자리"
                  onChange={changeLastEmailHandler}
                  onBlur={validateEmail}
                  value={typingEmail}
                />
              ) : (
                <input
                  type="text"
                  placeholder="이메일 뒷자리"
                  value={selectedEmailOption}
                  readOnly
                />
              )}{" "}
            </div>
            <div
              className={`${style.select_box} ${
                showEmailOptions ? style.show_options : ""
              }`}
              onClick={() => setShowEmailOptions(!showEmailOptions)}
            >
              <label className={style.select_value}>
                {selectedEmailOption}
              </label>
              <ul className={style.select_options}>
                {emailOptions.map((option) => (
                  <li
                    key={option}
                    className={style.option}
                    onClick={() => handleEmailOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
            {!isValid.email && isClicked.email && (
              <p className={style.validation}>이메일을 다시 확인해주세요.</p>
            )}
          </form>
        </div>

        <button
          className={style.bluebutton}
          onClick={moveCompleteSignUpHandler}
        >
          다음
        </button>
      </div>
      <Footer />
    </div>
  );
}
