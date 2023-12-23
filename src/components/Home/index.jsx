import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import CarbonCopy from "../../assets/CarbonCopy";
import Sun from "../../assets/Sun";
import Points from "../../assets/Points";
import SingUpForm from "../../commons/SingUpForm";
import Download from "../../assets/Download";
import Heart from "../../assets/Heart";
import Profile from "../../assets/Profile";
import CustomSelect from "../../commons/CustomSelect";
import TextEditor from "../TextEditor";

const files = {
  "script.js": {
    name: "script.js",
    language: "javascript",
  },
  "component.jsx": {
    name: "component.jsx",
    language: "javascript",
  },
  "data.json": {
    name: "data.json",
    language: "json",
  },
  "index.html": {
    name: "index.html",
    language: "html",
  },
};

const colors = [
  "#FFB800",
  "#3498db",
  "#e74c3c",
  "#2ecc71",
  "#f39c12",
  "#9b59b6",
];

function Home() {
  const [selectedStyle, setSelectedStyle] = useState("");
  const styles = ["vs", "vs-dark", "hc-black", "hc-light"];

  const [file, setFile] = useState(files["script.js"]);

  const [labelS, setLabelS] = useState("Style");
  const [labelF, setLabelF] = useState("Format");
  const [labelC, setLabelC] = useState(colors[0]);

  console.log("selectedStyle ---------> ", selectedStyle);

  return (
    <div className={s.dad}>
      <div className={s.childContainer2}>
        <div className={s.sun}>
          <Download />
          <Heart />
          <Sun />
          <Profile />
        </div>
        <div className={s.line}></div>
        <div className={s.child2}>
          <div className={s.svgContainer2}>
            <CarbonCopy width={"184"} height={"75"} />
            <p className={s.text}>Give style to your code</p>
            <CustomSelect
              label={labelS}
              setLabel={setLabelS}
              options={styles}
              selectedValue={selectedStyle}
              onSelectValue={setSelectedStyle}
            />
            <CustomSelect
              label={labelF}
              setLabel={setLabelF}
              files={files}
              options={Object.keys(files)}
              setFile={setFile}
            />
            <CustomSelect
              label={labelC}
              setLabel={setLabelC}
              options={colors}
            />
            <div className={s.textContainer} style={{ borderColor: labelC }}>
              <div className={s.abs}>
                <Points />
              </div>
              <TextEditor file={file} labelS={labelS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
