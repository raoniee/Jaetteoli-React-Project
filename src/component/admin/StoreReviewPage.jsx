import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import NavAdmin from "./NavAdmin";
import styles from "./StoreReviewPage.module.css";
import { ReactComponent as ReviewStarUp } from "../../assets/images/review_star_up.svg";
import { ReactComponent as CheckCircle } from "../../assets/images/check-circle.svg";
import { ReactComponent as XCircle } from "../../assets/images/x-circle.svg";
import { getCookieToken } from "../../store/common/Cookie";
import { useState } from "react";

export default function StoreReviewPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.insung.shop/jat/review/admin",
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
        console.log(data.result);
        setReviews(data.result);
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
        <div className={styles.wrap_review}>
          <span className={styles.title}>리뷰 관리</span>
          <div className={styles.review_container}>
            <ReviewCard results={reviews} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ReviewCard({ results }) {
  return (
    <>
      {results.map((result, index) => (
        <div className={styles.review_card}>
          <div className={styles.top}>
            <div className={styles.review_info}>
              <p className={styles.user_name}>{result.customerName}</p>
              <div className={styles.review_source}>
                <div className={styles.starbox}>
                  <ReviewStarUp />
                  <ReviewStarUp />
                  <ReviewStarUp />
                  <ReviewStarUp />
                  <ReviewStarUp />
                </div>
                <span className={styles.store_name}>{result.storeName}</span>
              </div>
              <div className={styles.review_desc}>{result.reviewContents}</div>
            </div>
            <img
              src={result.review_url}
              className={styles.review_img}
              alt="리뷰 사진"
            />
          </div>
          <div className={styles.bottom}>
            <div className={styles.result}>
              <div className={styles.maintain}>
                <CheckCircle />
                <p>유지하기</p>
              </div>
              <div className={styles.delete}>
                <XCircle />
                <p>삭제하기</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
