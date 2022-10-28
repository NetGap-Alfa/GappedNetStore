import React from "react";
import "./button.css";

export const Button = ({text,onClickFunc}) => {
  return (
    <div>
      <button className="button"
        onClick={onClickFunc}
      >
        {text}
      </button>
    </div>
  );
};
