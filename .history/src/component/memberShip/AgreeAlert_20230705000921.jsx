import React, { useEffect, useState } from "react";
import style from "./AgreeAlert.module.css";
import { ReactComponent as Close } from "../images/close.svg";

export default function AgreeAlert() {
  const [agrees, setAgrees] = useState([]);

  useEffect(() => {
    fetch(`data/agree_alert0.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터를 받아왔음");
        setAgrees(data);
      });
    return () => {
      "clean";
    };
  }, true);

  return (
    <div className={style.bg}>
      <div className={style.wrap}>
        <div className={style.top}>
          {agrees.map((agree) => (
            <span className={style.title}>{agree.title}</span>
          ))}
          <Close className={style.close} />
        </div>
        <div className={style.middle}>
          {agrees.map((agree) => (
            <div className={style.information}>
              <ul>
                <li className={style.subtitle}>{agree.subtitle}</li>
                <li className={style.date}>{agree.date}</li>
                <li className={style.time}>{agree.time}</li>
              </ul>
              <p className={style.desc}>{agree.desc}</p>
            </div>
          ))}
        </div>
        <div className={style.bottom}>
          <button>동의합니다.</button>
        </div>
      </div>
    </div>
  );
}
