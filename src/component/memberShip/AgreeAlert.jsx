import React from "react";
import style from "./AgreeAlert.module.css";
import { ReactComponent as Close } from "../../assets/images/close.svg";
import Modal from "../main/UI/Modal";
import AgreeDescm1 from "../../assets/data/agree_m1.json";
import AgreeDescm2 from "../../assets/data/agree_m2.json";
import AgreeDescs1 from "../../assets/data/agree_s1.json";
import AgreeDescs2 from "../../assets/data/agree_s2.json";

export default function AgreeAlert({ value, individual, onClose, target }) {
  //const [law, setLaw] = useState([]);

  function titlevalue(val) {
    var result = "";
    switch (val) {
      case "mandatoryOne":
        result = AgreeDescm1.map((agree) => agree.title);
        break;
      case "mandatoryTwo":
        result = AgreeDescm2.map((agree) => agree.title);
        break;
      case "selectiveOne":
        result = AgreeDescs1.map((agree) => agree.title);
        break;
      case "selectiveTwo":
        result = AgreeDescs2.map((agree) => agree.title);
        break;
    }
    return result;
  }

  function subtitlevalue(val) {
    var result = "";
    switch (val) {
      case "mandatoryOne":
        result = AgreeDescm1.map((agree) => agree.subtitle);
        break;
      case "mandatoryTwo":
        result = AgreeDescm2.map((agree) => agree.subtitle);
        break;
      case "selectiveOne":
        result = AgreeDescs1.map((agree) => agree.subtitle);
        break;
      case "selectiveTwo":
        result = AgreeDescs2.map((agree) => agree.subtitle);
        break;
    }
    return result;
  }

  function descvalue(val) {
    var result = "";
    switch (val) {
      case "mandatoryOne":
        result = AgreeDescm1.map((agree) => agree.desc);
        break;
      case "mandatoryTwo":
        result = AgreeDescm2.map((agree) => agree.desc);
        break;
      case "selectiveOne":
        result = AgreeDescs1.map((agree) => agree.desc);
        break;
      case "selectiveTwo":
        result = AgreeDescs2.map((agree) => agree.desc);
        break;
    }
    return result;
  }

  const handleAgree = () => {
    if (target === "selectiveTwo") {
      individual("isSns");
      individual("isEmail");
      individual("isPhone");
    } else {
      individual(target);
    }
    onClose();
  };

  // useEffect(() => {
  //   fetch(`/data/agree_alert0.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("데이터를 받아옴");
  //       setLaw(data);
  //     });
  //   return () => {
  //     console.log("clean");
  //   };
  // }, [value]);

  return (
    <Modal onClose={onClose}>
      <div className={style.bg}>
        <div className={style.wrap}>
          <div className={style.top}>
            <span className={style.title}>{titlevalue(target)}</span>
            <Close
              className={style.close}
              onClick={() => {
                onClose();
              }}
            />
          </div>
          <div className={style.middle}>
            {/* {law.map((agree) => (
              <div className={style.information}>
                <ul>
                  <li className={style.subtitle}>{agree.subtitle}</li>
                  <li className={style.date}>{agree.date}</li>
                  <li className={style.time}>{agree.time}</li>
                </ul>
                <p className={style.desc}>{agree.desc}</p>
              </div>
            ))} */}
            <div className={style.information}>
              <ul>
                <li className={style.subtitle}>{subtitlevalue(target)}</li>
                <li className={style.date}>07/20/2022</li>
                <li className={style.time}>09:19:24 AM</li>
              </ul>
              <p className={style.desc}>
                <pre>{descvalue(target)}</pre>
              </p>
            </div>
          </div>
          <div className={style.bottom}>
            <button onClick={handleAgree}>동의합니다.</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
