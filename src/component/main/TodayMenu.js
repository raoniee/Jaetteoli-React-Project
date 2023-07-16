import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import Items from "./Layout/registerItems/Items";
import Button from "./UI/Button";
import { getCookieToken } from "../../store/common/Cookie";

const Main1 = (props) => {
    const [menu, setMenu] = useState({
      mainMenu: null,
      sideMenu: null,
    });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://www.insung.shop/jat/today", {
            method: "GET",
            headers: {
              "X-ACCESS-TOKEN": getCookieToken(),
            },
          });
          const data = await response.json();
          if (!data.isSuccess) {
            console.log(data.message);
            return;
          }
          console.log(data.result)
          setMenu({
            mainMenu: data.result.mainMenus,
            sideMenu: data.result.sideMenus,
          });
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData();
    }, []);

    const updatedMenuList = (type, list) => {
      if(type==="main"){
        setMenu((prev) => ({
          ...prev,
          mainMenu: list
        }))
      }else if(type==="side"){
        setMenu((prev) => ({
          ...prev,
          sideMenu: list
        }))
      }
      console.log(menu)
    }
  
    return (
      <React.Fragment>
        <div>
          <Header />
          <SideBar />
          {menu.mainMenu && (
            <Items
              title="메인메뉴 등록"
              subTitle="오늘 메인메뉴중 떨이 상품으로 등록할 음식들을 할인율과 수량을 입력해주세요"
              menu={menu.mainMenu}
              updatedMenuList={updatedMenuList}
              type="main"
            />
          )}
          {menu.sideMenu && (
            <Items
              title="사이드 메뉴 등록"
              subTitle="오늘 사이드메뉴중 떨이 상품으로 등록할 음식들을 할인율과 수량을 입력해주세요"
              menu={menu.sideMenu}
              updatedMenuList={updatedMenuList}
              type="side"
            />
          )}
          <Button />
        </div>
      </React.Fragment>
    );
  };
  

export default Main1;
