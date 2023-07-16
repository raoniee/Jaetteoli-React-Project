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
            <li>
              <NavLink
                to="/admin/register"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                · 가게 등록 승인
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/review"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                · 리뷰 관리
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
