import React from "react";
import s from "./style.module.scss";
import CarbonCopy from "../../assets/CarbonCopy";
import Carbon from "../../images/Carbon.png";
import LogoP5 from "../../images/LogoP5.png";
import Arrow from "../../assets/Arrow";
import Smile from "../../assets/Smile";
import Tag from "../../assets/Tag";
import { useNavigate } from "react-router-dom";

function OnBoard() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className={s.dad}>
      <div className={s.childContainer}>
        <div className={s.child}>
          <div className={s.absolute}>
            <div className={s.smile}>
              <Smile />
            </div>
            <div className={s.tag}>
              <Tag />
            </div>
          </div>
          <div className={s.lines}></div>
          <div className={s.svgContainer}>
            <CarbonCopy width={"285px"} height={"117px"} />
          </div>
        </div>
      </div>
      <div className={s.block}>
        <div>
          <p className={s.text5}>Proyecto educativo inspirado en</p>
          <img className={s.carbon} src={Carbon} alt="Carbon logo" />
        </div>
        <button className={s.btn3} onClick={handleRegister}>
          <div className={s.arrowContainer}>
            <div className={s.line}></div>
            <div className={s.arrow}>
              <Arrow />
            </div>
          </div>
        </button>
      </div>
      <img className={s.p5} src={LogoP5} alt="Plataforma5 logo" />
    </div>
  );
}

export default OnBoard;
