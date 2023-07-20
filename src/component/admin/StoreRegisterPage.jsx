import React, { useEffect, useState } from "react";
import { getCookieToken } from "../../store/common/Cookie";
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
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.insung.shop/jat/stores/admin",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-ACCESS-TOKEN": getCookieToken(),
            },
          }
        );
        const data = await response.json();
        if (!data.isSuccess) {
          console.log(data.message);
          return;
        }
        setStores(data.result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.wrap}>
        <NavAdmin />
        <div className={styles.wrap_register}>
          <span className={styles.title}>가게등록 승인</span>
          <ul className={styles.store_list}>
            {stores.map((store, index) => (
              <li key={index}>
                <span className={styles.store_num}>{index + 1}</span>
                <p className={styles.store_name}>{store.storeName}</p>
                <Caret_Right className={styles.store_more} />
              </li>
            ))}
          </ul>
          <div className={styles.wrap_index}>
            <Arrow_Left_2 className={styles.left_endstep} />
            <Arrow_Left_1 className={styles.left_onestep} />
            <ul className={styles.num_list}>
              {stores.map((store, index) => (
                <li key={index}>{index + 1}</li>
              ))}
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
