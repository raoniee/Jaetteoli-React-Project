import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavAdmin.module.css";

export default function NavAdmin() {
  return (
    <div className={styles.nav_wrap}>
      <ul className={styles.depth1}>
        <li>
          <span className={styles.title}>관리자 페이지</span>
          <ul className={styles.depth2}>
            <NavLink to="/admin/register">
              <li>· 가게 등록 승인</li>
            </NavLink>
            <NavLink to="/admin/review">
              <li>· 리뷰 관리</li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  );
}
