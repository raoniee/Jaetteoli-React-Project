import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import NavAdmin from "./NavAdmin";
import styles from "./StoreReviewPage.module.css";

export default function StoreReviewPage() {
  return (
    <>
      <Header />
      <div className={styles.wrap}>
        <NavAdmin />
        <div></div>
      </div>
      <Footer />
    </>
  );
}
