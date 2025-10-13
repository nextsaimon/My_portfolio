
"use client"; 

import React from "react";

const BtnHome = ({ id, onMouseOver, onMouseOut, onClick, text, btnClass }) => {
  return (
    <button
      className={btnClass}
      id={id}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BtnHome;
