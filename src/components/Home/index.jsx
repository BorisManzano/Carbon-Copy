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
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

function Home({ toggleTheme }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [editorValue, setEditorValue] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const styles = ["vs", "vs-dark", "hc-black", "hc-light"];

  const [file, setFile] = useState(files["script.js"]);

  const [labelS, setLabelS] = useState("Style");
  const [labelF, setLabelF] = useState("Format");
  const [labelC, setLabelC] = useState(colors[0]);

  const handleEditorChange = (value, event) => {
    setEditorValue(value);
  };

  const handleDownloadClick = () => {
    const divToCapture = document.getElementById("miDiv");

    html2canvas(divToCapture)
      .then((canvas) => {
        const roundedCanvas = document.createElement("canvas");
        const roundedContext = roundedCanvas.getContext("2d");
        const borderRadius = 32;

        roundedCanvas.width = canvas.width;
        roundedCanvas.height = canvas.height;

        roundedContext.beginPath();
        roundedContext.moveTo(borderRadius, 0);
        roundedContext.lineTo(roundedCanvas.width - borderRadius, 0);
        roundedContext.quadraticCurveTo(
          roundedCanvas.width,
          0,
          roundedCanvas.width,
          borderRadius
        );
        roundedContext.lineTo(
          roundedCanvas.width,
          roundedCanvas.height - borderRadius
        );
        roundedContext.quadraticCurveTo(
          roundedCanvas.width,
          roundedCanvas.height,
          roundedCanvas.width - borderRadius,
          roundedCanvas.height
        );
        roundedContext.lineTo(borderRadius, roundedCanvas.height);
        roundedContext.quadraticCurveTo(
          0,
          roundedCanvas.height,
          0,
          roundedCanvas.height - borderRadius
        );
        roundedContext.lineTo(0, borderRadius);
        roundedContext.quadraticCurveTo(0, 0, borderRadius, 0);
        roundedContext.closePath();
        roundedContext.clip();

        roundedContext.drawImage(canvas, 0, 0);

        const dataURL = roundedCanvas.toDataURL("image/png");

        const downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "captura.png";

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
      .catch((error) => {
        console.error("Error al capturar la pantalla:", error);
      });
  };

  useEffect(() => {
    if (!user.email) {
      navigate("/login");
    }
  }, []);
  console.log(editorValue);
  return (
    <div className={s.dad}>
      <div className={s.childContainer2}>
        <div className={s.sun}>
          <Download handleDownloadClick={handleDownloadClick} />
          <Heart editorValue={editorValue} />
          <Sun toggleTheme={toggleTheme} />
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
            <div
              id="miDiv"
              className={s.textContainer}
              style={{ borderColor: labelC }}
            >
              <div className={s.abs}>
                <Points />
              </div>
              <TextEditor
                handleEditorChange={handleEditorChange}
                file={file}
                labelS={labelS}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
