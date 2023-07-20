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
import Pagination from "react-js-pagination";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function StoreRegisterPage() {
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [page, setPage] = useState(1);
  const [startnum, setStartNum] = useState(1);

  const limit = 5; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
    setStartNum((page - 1) * 5 + 1);
  };

  const handleClick = (index) => {
    navigate(`/admin/store?storeIdx=${stores[index].storeIdx}`);
  };

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
        console.log(data.result);
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
          <Posts
            stores={postsData(stores)}
            startnum={startnum}
            onClick={handleClick}
          />
          <PaginationBox>
            <Pagination
              activePage={page} // 현재 페이지
              itemsCountPerPage={5} // 한 페이지당 보여줄 아이템 갯수
              totalItemsCount={stores.length} // 총 아이템 갯수
              pageRangeDisplayed={5} // paginator의 페이지 범위
              onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
              firstPageText={<Arrow_Left_2 />}
              prevPageText={<Arrow_Left_1 />}
              lastPageText={<Arrow_Right_2 />}
              nextPageText={<Arrow_Right_1 />}
              itemClassFirst="left_endstep"
              itemClassPrev="left_onestep"
              itemClassNext="right_onestep"
              itemClassLast="right_endstep"
            />
          </PaginationBox>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Posts({ stores, startnum, onClick }) {
  return (
    <ul className={styles.store_list}>
      {stores.map((store, index) => (
        <li key={index}>
          <span className={styles.store_num}>{startnum + index}</span>
          <p
            className={styles.store_name}
            onClick={() => onClick(startnum + index - 1)}
          >
            {store.storeName}
          </p>
          <Caret_Right className={styles.store_more} />
        </li>
      ))}
    </ul>
  );
}

const PaginationBox = styled.div`
  width: 50%;
  margin-left: 400px;

  .pagination {
    display: flex;
    justify-content: space-between;
    height: 33px;
  }

  .pagination li a {
    display: block;
    width: 33px;
    height: 33px;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 33px;
  }
  .pagination .active a {
    color: rgba(96, 78, 248, 1);
    width: 33px;
    height: 33px;
    background-color: #f5f3ff;
    border-radius: 50%;
    text-align: center;
    line-height: 33px;
  }
  .pagination .left_endstep {
    width: 20px;
  }
  .pagination .left_onestep {
    width: 15px;
  }
  .pagination .right_onestep {
    width: 15px;
  }
  .pagination .right_endstep {
    width: 20px;
  }
`;
