import React, { useEffect, useState } from "react";
import style from "./AgreeAlert.module.css";
import { ReactComponent as Close } from "../../assets/images/close.svg";

export default function AgreeAlert({ individual, onClick }) {
  const [law, setLaw] = useState([]);

  useEffect(() => {
    fetch(`data/agree_alert0.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터를 받아옴");
        setLaw(data);
      });
    return () => {
      "clean";
    };
  }, true);

  return (
    <div className={style.bg}>
      <div className={style.wrap}>
        <div className={style.top}>
          {law.map((agree) => (
            <span className={style.title}>{agree.title}</span>
          ))}
          <Close
            className={style.close}
            onClick={() => {
              onClick();
            }}
          />
        </div>
        <div className={style.middle}>
          {law.map((agree) => (
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
          <button
            onClick={() => {
              individual();
              onClick();
            }}
          >
            동의합니다.
          </button>
        </div>
      </div>
    </div>
  );
}
