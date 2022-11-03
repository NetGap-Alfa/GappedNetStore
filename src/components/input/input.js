import React from "react";
import "./input.css";

export const Input = ({name,tag,type,placeholder,defaultValue}) => {
  return (
    <div>
      <label htmlFor={name} className="input-label">
        {tag}
      </label>
      <input
        className="input-text"
        type={type}
        name={name}
        value={defaultValue}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};
