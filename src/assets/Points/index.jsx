import React from "react";
import { useLocation } from "react-router-dom";

function Points() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      {pathname !== "/home" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="6"
          viewBox="0 0 28 6"
          fill="none"
        >
          <circle cx="3" cy="3" r="2.5" stroke="white" />
          <circle cx="14" cy="3" r="2.5" stroke="white" />
          <circle cx="25" cy="3" r="2.5" stroke="white" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="8"
          viewBox="0 0 32 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#F54141" />
          <circle cx="16" cy="4" r="4" fill="#FFB800" />
          <circle cx="28" cy="4" r="4" fill="#01FF1A" />
        </svg>
      )}
    </>
  );
}

export default Points;
