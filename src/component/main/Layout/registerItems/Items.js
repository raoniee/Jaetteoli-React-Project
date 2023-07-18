import { useState } from "react";
import Input from "../../UI/Input";
import classes from "./Items.module.css";

const Items = (props) => {
  const { menu } = props;

  const [menuList, setMenuList] = useState(menu);

  const handleDiscountRatioChange = (index, event) => {
    const updatedMenuList = [...menuList];
    const currentRatio = parseInt(event.target.value) >= 100 ? 100 : parseInt(event.target.value)
    const resultRatio = parseInt(currentRatio) <= 0 ? 0 : parseInt(currentRatio)
    const discountRatio = resultRatio || 0;

    // discountRatio 업데이트
    updatedMenuList[index].discountRatio = discountRatio;

    // discountPrice 업데이트
    const originPrice = updatedMenuList[index].originPrice;
    const discountPrice = originPrice - (originPrice * discountRatio) / 100;
    const truncatedNumber = Math.floor(discountPrice / 100) * 100; //십의자리 일의 자리 절사
    updatedMenuList[index].discountPrice = truncatedNumber;

    // 메뉴 목록 업데이트
    setMenuList(updatedMenuList);
    props.updatedMenuList(props.type, updatedMenuList);
  };

  const handlerCountChange = (index, event) => {
    const updatedMenuList = [...menuList];
    const remain = parseInt(event.target.value) || 0;

    // remain 업데이트
    console.log(updatedMenuList);
    updatedMenuList[index].remain = remain;

    // 메뉴 목록 업데이트
    setMenuList(updatedMenuList);
    props.updatedMenuList(props.type, updatedMenuList);
  };

  const menuItems = menuList.map((menu, index) => (
    <tr key={menu.menuIdx}>
      <th scope="row">{index + 1}</th>
      <td>
        <Input value={menu.menuName} readonly={true} />
      </td>
      <td>
        <Input value={menu.originPrice + " 원"} readonly={true} />
      </td>
      <td>
        <Input
          value={
            menu.discountRatio === 0
              ? menu.originPrice + " 원"
              : menu.discountPrice.toFixed(0) + " 원"
          }
          readonly={true}
        />
      </td>
      <td>
        <Input
          value={menu.discountRatio}
          onChange={handleDiscountRatioChange}
          index={index}
          readonly={false}
        />
      </td>
      <td>
        <Input
          value={menu.remain}
          readonly={false}
          index={index}
          onChange={handlerCountChange}
        />
      </td>
    </tr>
  ));

  return (
    <div className={classes["items-container"]}>
      <div className={classes["title-container"]}>
        <div className={classes["inner-container"]}>
          <h1 className={classes.title}>{props.title}</h1>
          <p className={classes.subTitle}>{props.subTitle}</p>
        </div>
      </div>
      <div className={classes["table-container"]}>
        <table className={classes.type07}>
          <thead>
            <tr>
              <th scope="cols"></th>
              <th scope="cols">메뉴명</th>
              <th scope="cols">가격</th>
              <th scope="cols">할인가격</th>
              <th scope="cols"><span style={{color: 'red'}}>* </span>할인율 (%)</th>
              <th scope="cols"><span style={{color: 'red'}}>* </span>수량 (개)</th>
            </tr>
          </thead>
          <tbody>{menuItems}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
