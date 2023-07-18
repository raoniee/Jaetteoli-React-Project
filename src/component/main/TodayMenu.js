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

  const [originMenu, setOriginMenu] = useState({
    mainMenu: null,
    sideMenu: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.insung.shop/jat/today", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-ACCESS-TOKEN": getCookieToken(),
          },
        });
        const data = await response.json();
        if (!data.isSuccess) {
          console.log(data.message);
          return;
        }
        console.log(data.result);
        setMenu({
          mainMenu: data.result.mainMenus,
          sideMenu: data.result.sideMenus,
        });
        setOriginMenu({
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
    if (type === "main") {
      setMenu((prev) => ({
        ...prev,
        mainMenu: list,
      }));
    } else if (type === "side") {
      setMenu((prev) => ({
        ...prev,
        sideMenu: list,
      }));
    }
    // console.log(originMenu)
  };

  useEffect(() => {
    console.log('change')
  }, [originMenu])

  const onTodayMenuSubmit = async () => {
    //메인메뉴
    for (let i = 0; i < originMenu.mainMenu.length; i++) {
      console.log('기존 메뉴의 할인율')
      console.log(originMenu.mainMenu[i].discountRatio);
      console.log('바뀐 메뉴의 할인율')
      console.log(menu.mainMenu[i].discountRatio);
      console.log('-------------------')
      if (originMenu.mainMenu[i].isUpdated === -1) {
        if (
          menu.mainMenu[i].discountRatio === 0 &&
          menu.mainMenu[i].remain === 0
        ) {
          //origin이 -1이였는데 할인율과 재고가 0이면 그대로 -1
          continue;
        } else if (
          menu.mainMenu[i].discountRatio !== 0 ||
          menu.mainMenu[i].remain !== 0
        ) {
          //origin이 -1이였는데 할인율이나 재고가 바뀌면 2
          setMenu((prevMenu) => {
            const updatedMainMenu = [...prevMenu.mainMenu];
            updatedMainMenu[i].isUpdated = 2;
            return { ...prevMenu, mainMenu: updatedMainMenu };
          });
        }
      } else if (originMenu.mainMenu[i].isUpdated === 0) {
        console.log('hihi')
        if (
          menu.mainMenu[i].discountRatio !==
            originMenu.mainMenu[i].discountRatio ||
          menu.mainMenu[i].remain !== originMenu.mainMenu[i].remain
        ) {
          //origin이 0인데 할인율이나 재고를 수정하면 1
          console.log(menu.mainMenu[i].discountRatio);
          console.log(originMenu.mainMenu[i].discountRatio);

          setMenu((prevMenu) => {
            const updatedMainMenu = [...prevMenu.mainMenu];
            updatedMainMenu[i].isUpdated = 1;
            return { ...prevMenu, mainMenu: updatedMainMenu };
          });
        } else if (
          menu.mainMenu[i].discountRatio ===
            originMenu.mainMenu[i].discountRatio &&
          menu.mainMenu[i].remain === originMenu.mainMenu[i].remain
        ) {
          //origin이 0인데 할인율이랑 재고가 같으면 0
          continue;
        }
      }
    }
    //사이드메뉴
    for (let i = 0; i < originMenu.sideMenu.length; i++) {
      if (originMenu.sideMenu[i].isUpdated === -1) {
        if (
          menu.sideMenu[i].discountRatio === 0 &&
          menu.sideMenu[i].remain === 0
        ) {
          //origin이 -1이였는데 할인율과 재고가 0이면 그대로 -1
          continue;
        } else if (
          menu.sideMenu[i].discountRatio !== 0 ||
          menu.sideMenu[i].remain !== 0
        ) {
          //origin이 -1이였는데 할인율이나 재고가 바뀌면 2
          setMenu((prevMenu) => {
            const updatedSideMenu = [...prevMenu.sideMenu];
            updatedSideMenu[i].isUpdated = 2;
            return { ...prevMenu, sideMenu: updatedSideMenu };
          });
        }
      } else if (originMenu.sideMenu[i].isUpdated === 0) {
        if (
          menu.sideMenu[i].discountRatio !==
            originMenu.sideMenu[i].discountRatio ||
          menu.sideMenu[i].remain !== originMenu.sideMenu[i].remain
        ) {
          //origin이 0인데 할인율이나 재고를 수정하면 1
          setMenu((prevMenu) => {
            const updatedSideMenu = [...prevMenu.sideMenu];
            updatedSideMenu[i].isUpdated = 1;
            return { ...prevMenu, sideMenu: updatedSideMenu };
          });
        } else if (
          menu.sideMenu[i].discountRatio ===
            originMenu.sideMenu[i].discountRatio &&
          menu.sideMenu[i].remain === originMenu.sideMenu[i].remain
        ) {
          //origin이 0인데 할인율이랑 재고가 같으면 0
          continue;
        }
      }
    }

    console.log(menu.mainMenu); //requsetBody 전
    return //api보내기전 확인
    try {
      // setMenu 호출 후 업데이트된 menu 상태를 기다림
      await new Promise((resolve) => {
        setMenu((prevMenu) => {
          const updatedMenu = { ...prevMenu };
          resolve(updatedMenu);
          return updatedMenu;
        });
      });
      // console.log(menu.mainMenu); //requsetBody 전
      const requestBody = {
        mainMenus: menu.mainMenu,
        sideMenus: menu.sideMenu,
      };
      // console.log(JSON.stringify(requestBody)); //내가 보낸 requset
      return;
      const response = await fetch("https://www.insung.shop/jat/today", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-ACCESS-TOKEN": getCookieToken(),
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      if (!data.isSuccess) {
        console.log(data.code);
        console.log(data.message);
        return;
      }
      const result = await data["result"];
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

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
            originMenu={originMenu.mainMenu}
            updatedMenuList={updatedMenuList}
            type="main"
          />
        )}
        {menu.sideMenu && (
          <Items
            title="사이드 메뉴 등록"
            subTitle="오늘 사이드메뉴중 떨이 상품으로 등록할 음식들을 할인율과 수량을 입력해주세요"
            menu={menu.sideMenu}
            originMenu={originMenu.sideMenu}
            updatedMenuList={updatedMenuList}
            type="side"
          />
        )}
        <Button onClick={onTodayMenuSubmit} />
      </div>
    </React.Fragment>
  );
};

export default Main1;
