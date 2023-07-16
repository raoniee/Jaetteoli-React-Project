import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import NavAdmin from "./NavAdmin";
import styles from "./StoreRegisterPage.module.css";
import { ReactComponent as Caret_Right } from "../../assets/images/caret-right.svg";
import { ReactComponent as Arrow_Right_1 } from "../../assets/images/arrow_right_1.svg";
import { ReactComponent as Arrow_Right_2 } from "../../assets/images/arrow_right_2.svg";
import { ReactComponent as Arrow_Left_1 } from "../../assets/images/arrow_left_1.svg";
import { ReactComponent as Arrow_Left_2 } from "../../assets/images/arrow_left_2.svg";

export default function StoreRegisterPage() {
  return (
    <>
      <Header />
      <div className={styles.wrap}>
        <NavAdmin />
        <div className={styles.wrap_register}>
          <span className={styles.title}>가게등록 승인</span>
          <ul className={styles.store_list}>
            <RegisterStore />
          </ul>
          <div className={styles.wrap_index}>
            <Arrow_Left_2 className={styles.left_endstep} />
            <Arrow_Left_1 className={styles.left_onestep} />
            <ul className={styles.num_list}>
              <RegisterNumber />
            </ul>
            <Arrow_Right_1 className={styles.right_onestep} />
            <Arrow_Right_2 className={styles.right_endstep} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function RegisterStore() {
  return (
    <li>
      <span className={styles.store_num}>1</span>
      <p className={styles.store_name}>Cu 편의점 무거점</p>
      <Caret_Right className={styles.store_more} />
    </li>
  );
}

function RegisterNumber() {
  return <li>1</li>;
}
