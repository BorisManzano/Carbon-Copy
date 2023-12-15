import React, { useState } from "react";
import CarbonCopy from "../../assets/CarbonCopy";
import s from "./style.module.scss";
import Sun from "../../assets/Sun";
import Points from "../../assets/Points";
import SingUpForm from "../../commons/SingUpForm";

function SingUp() {
  return (
    <div className={s.dad}>
      <div className={s.childContainer2}>
        <div className={s.sun}>
          <Sun />
        </div>
        <div className={s.line}></div>
        <div className={s.child2}>
          <div className={s.svgContainer2}>
            <CarbonCopy width={"184"} height={"75"} />
            <p className={s.text}>Give style to your code</p>
            <div className={s.row}>
              <Points /> <p className={s.text2}>Sing up</p>
            </div>
            <SingUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
