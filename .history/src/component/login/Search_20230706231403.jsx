import React, { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import style from "./Search.module.css";
import IDSearch from "./IDSearch";
import PasswordSearch from "./PasswordSearch";

export default function Search() {
  const [option, SetOption] = useState(true);
  const handleClick = () => {
    SetOption((prev) => !prev);
  };
  return (
    <div className={style.container}>
      <Header />
      <div className={style.IDSearch}>
        <span className={style.title}>아이디 - 비밀번호 찾기</span>
        <ul className={style.search_option}>
          <li className={style.bg} onClick={handleClick}>
            아이디 찾기
          </li>
          <li onClick={handleClick}>비밀번호 찾기</li>
        </ul>
        {option ? <IDSearch /> : <PasswordSearch />}
      </div>
      <Footer />
    </div>
  );
}
