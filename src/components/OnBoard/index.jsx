import React from "react";
import s from "./style.module.scss";
import CarbonCopy from "../../assets/CarbonCopy";

function OnBoard() {
  return (
    <div className={s.dad}>
      <div className={s.childContainer}>
        <div className={s.child}>
          <div className={s.lines}></div>
          <div className={s.svgContainer}>
            <CarbonCopy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnBoard;
