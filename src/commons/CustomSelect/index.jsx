import React, { useState } from "react";
import s from "./style.module.scss";
import Dropdown from "../../assets/Dropdown";

function CustomSelect({ label, setLabel, options, setFile, files }) {
  const handleToggleLabel = (opt) => {
    setLabel(opt);
    if (setFile && options.includes(opt)) {
      setFile(files[opt]);
    }
  };

  const isColor = (str) => {
    return /^#[0-9A-F]{6}$/i.test(str);
  };

  return (
    <div className={`dropdown ${s.gap}`}>
      <button
        className="btn btn-secondary"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          display: "flex",
          textAlign: "left",
          border: " solid 1px #fff",
          borderRadius: "40px",
          width: "19rem",
          backgroundColor: "transparent",
          color: "#fff",
        }}
      >
        <div className={s.drop}>
          {isColor(label) ? (
            <div className={s.lab}>
              <div className={s.col} style={{ background: label }}></div>
            </div>
          ) : (
            <div className={s.lab}> {label}</div>
          )}

          <Dropdown />
        </div>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-dark"
        style={{
          textAlign: "left",
          border: " solid 1px #fff",
          width: "19rem",
          backgroundColor: "#4b7eff",
          color: "#fff",
        }}
      >
        {options.map((opt, i) => (
          <li
            key={opt}
            className={`dropdown-item ${label === opt ? "active" : ""}`}
            onClick={() => handleToggleLabel(opt)}
          >
            {isColor(opt) ? (
              <div className={s.lab}>
                <div className={s.col} style={{ background: opt }}></div>
                <p>{opt}</p>
              </div>
            ) : (
              opt
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomSelect;
