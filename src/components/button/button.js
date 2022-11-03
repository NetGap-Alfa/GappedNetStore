import React from "react";
import "./button.css";

export const Button = ({text,onClickFunc,otherprops}) => {
  return (
    <div>
      <button className={`button ${otherprops}`}
        onClick={onClickFunc}
      >
        {text}
      </button>
    </div>
  );
};
